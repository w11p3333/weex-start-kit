//
//  WebViewController.m
//  test
//
//  Created by 卢良潇 on 2017/4/20.
//  Copyright © 2017年 卢良潇. All rights reserved.
//

#import "OComp.h"
#import <WeexSDK/WXSDKInstance.h>

@interface OComp ()

@property (nonatomic, strong) WXSDKInstance *weexInstance;

@end

@implementation OComp


- (void)renderWithURL:(NSURL *)url
            Params:(NSDictionary *)params
            Target:(UIViewController *)viewController
            Frame:(CGRect)frame
            Create:(void (^)(UIView *weexView))create
            Success:(void (^)(UIView *weexView))success
            Failure:(void (^)(NSError *error))failure
{
    _weexInstance = [[WXSDKInstance alloc] init];
    _weexInstance.viewController = viewController;
    _weexInstance.frame = frame;
    _weexInstance.onCreate = create;
    _weexInstance.onFailed = failure;
    _weexInstance.renderFinish = success;
    NSDictionary *option = @{
                @"params": params
                };
    [_weexInstance renderWithURL:url options:option data:nil];
}

- (void)destroy
{
    [_weexInstance destroyInstance];
}

@end
