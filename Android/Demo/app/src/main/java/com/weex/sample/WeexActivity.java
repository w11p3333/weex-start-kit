package com.weex.sample;

import android.graphics.Color;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;

import java.util.HashMap;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;

/**
 * Created by luliangxiao on 2017/4/28.
 */

public class WeexActivity extends AppCompatActivity implements IWXRenderListener {

    WXSDKInstance mWXSDKInstance;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_weex);

    mWXSDKInstance = new WXSDKInstance(this);
    mWXSDKInstance.registerRenderListener(this);
    // 定义参数
    HashMap<String, Object> options = new HashMap<String, Object>();
    HashMap<String,String> params = new HashMap<String, String>();
    params.put("platform", "Android");
    options.put("params", params);
    String jsPath = "weex/js/index.js";
    options.put(WXSDKInstance.BUNDLE_URL, jsPath);
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
