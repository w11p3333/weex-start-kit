//
//  WXimgLoader.m
//  WeexDemo
//
//  Created by 卢良潇 on 2017/4/17.
//  Copyright © 2017年 taobao. All rights reserved.
//

#import "WXimgLoader.h"
#import <SDWebImage/UIImageView+WebCache.h>


#define MIN_IMAGE_WIDTH 36
#define MIN_IMAGE_HEIGHT 36

#if OS_OBJECT_USE_OBJC
#undef  WXDispatchQueueRelease
#undef  WXDispatchQueueSetterSementics
#define WXDispatchQueueRelease(q)
#define WXDispatchQueueSetterSementics strong
#else
#undef  WXDispatchQueueRelease
#undef  WXDispatchQueueSetterSementics
#define WXDispatchQueueRelease(q) (dispatch_release(q))
#define WXDispatchQueueSetterSementics assign
#endif


@interface WXimgLoader ()

@property (WXDispatchQueueSetterSementics, nonatomic) dispatch_queue_t ioQueue;

@end

@implementation WXimgLoader

#pragma mark -
#pragma mark WXImgLoaderProtocol
- (id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)options completed:(void (^)(UIImage *, NSError *, BOOL))completedBlock{
    if ([url hasPrefix:@"//"]) {
        url = [@"http:" stringByAppendingString:url];
    }
    // 加载本地图片
    if ([url hasPrefix:@"file://"]) {
        NSString *newUrl = [url stringByReplacingOccurrencesOfString:@"/images/" withString:@"/"];
        UIImage *image = [UIImage imageNamed:[newUrl substringFromIndex:7]];
        completedBlock(image, nil, YES);
        return (id<WXImageOperationProtocol>) self;
    } else {
        // 加载网络图片
        return (id<WXImageOperationProtocol>)[[SDWebImageManager sharedManager]downloadImageWithURL:[NSURL URLWithString:url] options:0 progress:^(NSInteger receivedSize, NSInteger expectedSize) {
        } completed:^(UIImage *image, NSError *error, SDImageCacheType cacheType, BOOL finished, NSURL *imageURL) {
            if (completedBlock) {
                completedBlock(image, error, finished);
            }
        }];
    }
}

- (void)cancel{
    [[SDWebImageManager sharedManager]cancelAll];
}

@end
