//
//  WebViewController.h
//  test
//
//  Created by 卢良潇 on 2017/4/20.
//  Copyright © 2017年 卢良潇. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface OComp: NSObject

- (void)destroy;

- (void)renderWithURL:(NSURL *)url
               Params:(NSDictionary *)params
               Target:(UIViewController *)vc
               Frame:(CGRect)frame
               Create:(void (^)(UIView *weexView))create
               Success:(void (^)(UIView *weexView))success
               Failure:(void (^)(NSError *error))failure;

@end
