//
//  CIWebViewModule.h
//  test
//
//  Created by 卢良潇 on 2017/4/27.
//  Copyright © 2017年 卢良潇. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <WeexSDK/WeexSDK.h>

@interface CIJSModule : NSObject<WXModuleProtocol>

- (void)webviewStartLoad:(NSString *)url;

@end
