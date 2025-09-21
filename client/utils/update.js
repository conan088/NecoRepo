// 检查更新APP
import { getVersion } from "@/api/home.js";

class UpdateApp {
	constructor() {
		this.downloadTask = null;
		this.percent = 0;
	}
  // 检查更新
  async checkUpdate() { 
    try {
      // #ifdef APP-PLUS
      const platform = uni.getSystemInfoSync().platform;
			plus.runtime.getProperty(plus.runtime.appid, (inf) => {
				const version = inf.version
				getVersion().then((data) => {
					const obj = JSON.parse(data.data.result);
					let newVersion = obj[`${platform}Version`]
					if (this.compareVersion(newVersion, version) > 0) {
						let url = obj[`${platform}DownloadUrl`]
					  // 提示用户更新
					  uni.showModal({
					    title: '发现新版本',
					    content: obj.content,
					    confirmText: '立即更新',
					    success: (res) => {
					      if (res.confirm) {
							  uni.showToast({
							  	    title: "正在后台更新，请不要退出应用",
							  	    icon: "none",
							  	    duration: 1500,
							  })
									if (platform === 'android') {
										this.downloadUpdate(url);
									} else {
										uni.navigateTo({
											url: `/pages/tabbar/home/web-view?src=${encodeURIComponent(url)}`
										})
									}
					      }
					    }
					  });
					}
				}).catch((err) => {
					console.error('检查更新失败:', err);
				})
			});
      
      // #endif
    } catch (error) {
      console.error('检查更新失败:', error);
    }
  }
  
  // 下载更新包
  downloadUpdate(url) {
    // #ifdef APP-PLUS
    // 创建通知
    // this.showNotification('开始下载更新', 0);
    
    this.downloadTask = plus.downloader.createDownload(url, { 
      filename: "_doc/update/",
			priority: 10
    }, (d, status) => {
      if (status === 200) {
				console.log('开始安装')
        // 安装更新
        this.installUpdate(d.filename);
      } else {
				this.createNotification('下载失败: ' + status);
				reject(new Error('下载失败，状态码: ' + status));
      }
    });
    
    // 监听下载进度
    this.downloadTask.addEventListener("statechanged", (download, status) => {
      if (download.downloadedSize && download.totalSize) {
        const percent = Math.round(download.downloadedSize / download.totalSize * 100);
				if (percent > this.percent) {
					this.percent = percent
					// this.showNotification('正在下载... ' + percent + '%', percent);
				}
      }
    });
    
    this.downloadTask.start();
    // #endif
  }
  
  // 安装更新
  installUpdate(filePath) {
    // #ifdef APP-PLUS
    // this.showNotification('下载完成，正在安装...', 100);
    
    // 安装更新包
		plus.runtime.install(filePath, {
			force: false
		}, () => {
			// this.showNotification('更新安装成功，请重启应用', 100);
		}, (e) => {
			// this.showNotification('安装失败: ' + e.message, 0);
		});
    // #endif
  }
	// 版本号比较
	compareVersion(v1, v2) {
		const v1Parts = v1.split('.');
		const v2Parts = v2.split('.');
		const maxLen = Math.max(v1Parts.length, v2Parts.length);
		
		for (let i = 0; i < maxLen; i++) {
			const num1 = parseInt(v1Parts[i] || 0);
			const num2 = parseInt(v2Parts[i] || 0);
			
			if (num1 > num2) return 1;
			if (num1 < num2) return -1;
		}
		
		return 0;
	}
	// 更新通知内容
	showNotification(content, progress) {
		console.log('执行下载')
		// uni.createPushMessage({
		// 	cover: true,
		// 	content,
		// })
	}
	
	/**
	 * 取消下载
	 */
	cancelDownload() {
		if (this.downloadTask) {
			this.downloadTask.abort();
		}
	}
}

export default new UpdateApp();