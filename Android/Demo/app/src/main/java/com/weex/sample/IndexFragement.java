package com.weex.sample;

import android.app.Fragment;
import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;

import java.util.HashMap;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;

/**
 * Created by luliangxiao on 2017/4/28.
 */

public class IndexFragement extends Fragment implements IWXRenderListener {

    private FrameLayout mContainer;
    WXSDKInstance mWXSDKInstance;

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        View view = View.inflate(getActivity(), R.layout.fragment_index, null);
        mContainer = (FrameLayout) view.findViewById(R.id.fragment_container);

        mWXSDKInstance = new WXSDKInstance(getActivity());
        mWXSDKInstance.registerRenderListener(this);
        // 定义参数
        HashMap<String, Object> options = new HashMap<String, Object>();
        HashMap<String,String> params = new HashMap<String, String>();
        params.put("platform", "Android");
        options.put("params", params);
        String jsPath = "weex/js/index.js";
        options.put(WXSDKInstance.BUNDLE_URL, jsPath);
        mWXSDKInstance.render("WXSample", WXFileUtils.loadAsset(jsPath, getActivity()), options, null, -1, -1, WXRenderStrategy.APPEND_ASYNC);
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        if (mContainer.getParent() != null) {
            ((ViewGroup) mContainer.getParent()).removeView(mContainer);
        }
        return mContainer;
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        // 处理view的加载 以及大小
        mContainer.addView(view);
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
    public void onResume() {
        super.onResume();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityResume();
        }
    }
    @Override
    public void onPause() {
        super.onPause();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityPause();
        }
    }
    @Override
    public void onStop() {
        super.onStop();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityStop();
        }
    }
    @Override
    public void onDestroy() {
        super.onDestroy();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityDestroy();
        }
    }
}
