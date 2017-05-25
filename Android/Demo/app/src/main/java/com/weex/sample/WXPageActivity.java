package com.weex.sample;

import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;

import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;

import java.util.HashMap;

/**
 * Created by luliangxiao on 2017/4/28.
 */

public class WXPageActivity extends AppCompatActivity implements IWXRenderListener {

    WXSDKInstance mWXSDKInstance;
    Uri mUri;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_weex);

        Uri uri = getIntent().getData();
        Bundle bundle = getIntent().getExtras();
        if (uri != null) {
            mUri = uri;
        }

        if (bundle != null) {
            String bundleUrl = bundle.getString("bundleUrl");
            if (!TextUtils.isEmpty(bundleUrl)) {
                mUri = Uri.parse(bundleUrl);
            }
        }

        if (mUri == null) {
            Toast.makeText(this, "the uri is empty!", Toast.LENGTH_SHORT).show();
            finish();
            return;
        }

        String path = mUri.toString();
        // 传来的url参数总会带上http:/ 应该是个bug 可以自己判断是否本地url再去跳转
        String jsPath = path.indexOf("weex/js/") > 0 ? path.replace("http:/", "") : path;
        HashMap<String, Object> options = new HashMap<String, Object>();
        options.put(WXSDKInstance.BUNDLE_URL, jsPath);
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
        mWXSDKInstance.render("WXSample", WXFileUtils.loadAsset(jsPath, this), options, null, -1, -1, WXRenderStrategy.APPEND_ASYNC);
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        // 处理view的加载 大小
        setContentView(view);
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        // 加载weex页面失败 使用webview降级处理
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
        // 渲染成功
    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
        // 刷新成功
    }
    @Override
    protected void onResume() {
        super.onResume();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityResume();
        }
    }
    @Override
    protected void onPause() {
        super.onPause();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityPause();
        }
    }
    @Override
    protected void onStop() {
        super.onStop();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityStop();
        }
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityDestroy();
        }
    }
}
