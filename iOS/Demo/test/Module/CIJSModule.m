//
//  CIWebViewModule.m
//  test
//
//  Created by 卢良潇 on 2017/4/27.
//  Copyright © 2017年 卢良潇. All rights reserved.
//

#import "CIJSModule.h"

@implementation CIJSModule
@synthesize weexInstance;
    WX_EXPORT_METHOD(@selector(webviewStartLoad:))

- (void)webviewStartLoad:(NSString *)url
{
    NSLog(@"我的url是%@", url);
//    if ([url containsString:@"/utemplate/main.php?action=login_wxmp.html"]) {
//        [[NSNotificationCenter defaultCenter] postNotification:[NSNotification notificationWithName:@"test" object:nil userInfo:nil]];
//    }
}

@end
