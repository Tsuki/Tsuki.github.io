----
title: 在WPF自定 ProgressBar 動畫
date: 2016-05-12 02:39:09
tags:
-  WPF
- C ++++
----
### ProgressBar.xaml

```xml
<Canvas>
  <!--RenderTransformOrigin= 正中心旋轉 Fill 顏色-->
  <ed:Arc ArcThickness="10" ArcThicknessUnit="Pixel" EndAngle="90" Fill="ForestGreen" Stretch="None" StartAngle="0" Height="50" Canvas.Left="0" Canvas.Top="0" Width="50" RenderTransformOrigin="0.5,0.5">
    <ed:Arc.RenderTransform>
      <RotateTransform></RotateTransform>
    </ed:Arc.RenderTransform>
    <ed:Arc.Triggers>
      <!--定義觸發事件-->
      <EventTrigger RoutedEvent="Window.Loaded">
        <BeginStoryboard>
          <Storyboard>
            <!--定義速度 和方向 360／－360-->
            <DoubleAnimation Storyboard.TargetProperty="(Rectangle.RenderTransform).(RotateTransform.Angle)" To="360" Duration="0:0:1" RepeatBehavior="Forever"/>
          </Storyboard>
        </BeginStoryboard>
      </EventTrigger>
    </ed:Arc.Triggers>
  </ed:Arc>
</Canvas>
```