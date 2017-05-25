//
//  ViewController.m
//  test
//
//  Created by 卢良潇 on 2017/4/20.
//  Copyright © 2017年 卢良潇. All rights reserved.
//

#import "ViewController.h"
#import <WeexSDK/WXSDKInstance.h>

@interface ViewController ()

@property(nonatomic, strong)UIView *weexView;
@property(nonatomic, strong)WXSDKInstance *instance;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self render];
    
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)dealloc
{
    [_instance destroyInstance];
}

- (void)render
{
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    // 状态栏(statusbar)
    CGFloat statusHeight = [[UIApplication sharedApplication] statusBarFrame].size.height;
    // 导航栏（navigationbar）
    CGFloat navHeight = self.navigationController.navigationBar.frame.size.height;
    CGRect frame = CGRectMake(0, statusHeight + navHeight, self.view.frame.size.width, self.view.frame.size.height - statusHeight - navHeight);
    _instance.frame = frame;
    
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:weakSelf.weexView];
    };
    
    _instance.onFailed = ^(NSError *error) {
        //process failure
        NSLog(@"weex view渲染失败: %@", error);
    };
    
    _instance.renderFinish = ^ (UIView *view) {
        //process renderFinish
        NSLog(@"weex view渲染成功");
    };
    
    // js地址
    NSURL *url = [NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"index" ofType:@"js"]];
    NSDictionary *options = @{
                                  @"bundleUrl": [url absoluteString],
                                  @"params": @{ @"platform": @"iOS" }
                              };
    
    [_instance renderWithURL:url options:options data:nil];
    
}





@end
