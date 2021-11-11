package com.facebookfake;
import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "facebookfake";
  }
    /*-- Add aqui tbm para funcionamento -- */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
   /*-- Add aqui tbm para funcionamento -- */
}
