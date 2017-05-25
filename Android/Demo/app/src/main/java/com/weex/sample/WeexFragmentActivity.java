package com.weex.sample;

import android.app.FragmentTransaction;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

/**
 * Created by luliangxiao on 2017/4/28.
 */

public class WeexFragmentActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_fragment);

        IndexFragement fragement = new IndexFragement();
        FragmentTransaction transaction = getFragmentManager().beginTransaction();
        transaction.add(R.id.content_fragment, fragement);
        transaction.commit();
    }
}
