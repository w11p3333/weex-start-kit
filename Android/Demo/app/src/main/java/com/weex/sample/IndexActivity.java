package com.weex.sample;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class IndexActivity extends AppCompatActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_index);

    findViewById(R.id.btn_activity).setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        startActivity(new Intent(IndexActivity.this, WeexActivity.class));
      }
    });

    findViewById(R.id.btn_fragment).setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        startActivity(new Intent(IndexActivity.this, WeexFragmentActivity.class));
      }
    });

  }

}
