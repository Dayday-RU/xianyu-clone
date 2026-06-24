// ===== 闲鱼 1:1 翻版 - 主应用逻辑 =====

(function() {
    'use strict';

    // ===== DOM 快捷方法 =====
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    // ===== 模拟商品数据 =====
    const mockProducts = [
        { id: 1, title: 'Apple iPhone 15 Pro Max 256GB 原色钛金属 几乎全新', price: 6999, originalPrice: 9999, location: '杭州', wantCount: 128, image: 'https://picsum.photos/seed/iphone/400/500', tag: '急售', category: 'digital', seller: '数码达人小王', sellerAvatar: '#FF6B6B', sellerCredit: '信用极好', sellerSold: 86, desc: '去年12月购入，一直带壳贴膜使用，无任何划痕磕碰。电池健康度98%，配件齐全带原装盒子。因换了新手机故出。' },
        { id: 2, title: 'MacBook Pro 14寸 M3 Pro芯片 18GB/512GB', price: 12500, originalPrice: 16999, location: '北京', wantCount: 89, image: 'https://picsum.photos/seed/macbook/400/400', tag: '', category: 'digital', seller: '科技宅小李', sellerAvatar: '#4ECDC4', sellerCredit: '信用极好', sellerSold: 124, desc: '2024年3月购入，主要用于办公和轻度剪辑，循环次数仅50次。屏幕完美，键盘无油光，配件齐全。' },
        { id: 3, title: 'Nike Air Jordan 1 芝加哥配色 43码 只穿过一次', price: 899, originalPrice: 1499, location: '上海', wantCount: 56, image: 'https://picsum.photos/seed/shoes/400/550', tag: '', category: 'clothes', seller: '潮鞋收藏家', sellerAvatar: '#FF8C00', sellerCredit: '信用良好', sellerSold: 32, desc: '正品购入，仅穿一次出门，几乎全新。鞋底无磨损，鞋面无折痕。43码偏小，建议42.5脚穿。' },
        { id: 4, title: '戴森V15吸尘器 全新未拆封', price: 3299, originalPrice: 4990, location: '深圳', wantCount: 203, image: 'https://picsum.photos/seed/dyson/400/450', tag: '全新', category: 'home', seller: '居家好物推荐', sellerAvatar: '#45B7D1', sellerCredit: '信用极好', sellerSold: 567, desc: '年会奖品，全新未拆封。戴森V15 Detect Absolute，带激光探测，官网可查序列号。' },
        { id: 5, title: 'SK-II神仙水230ml 专柜正品', price: 680, originalPrice: 1370, location: '广州', wantCount: 312, image: 'https://picsum.photos/seed/skii/400/420', tag: '', category: 'beauty', seller: '美妆代购小美', sellerAvatar: '#F06292', sellerCredit: '信用极好', sellerSold: 1023, desc: '朋友日本带回，囤货太多用不完。230ml大瓶装，塑封完好，保质期到2026年。' },
        { id: 6, title: '索尼PS5游戏机 光驱版 带两个手柄', price: 2800, originalPrice: 3899, location: '成都', wantCount: 167, image: 'https://picsum.photos/seed/ps5/400/480', tag: '热门', category: 'digital', seller: '游戏老玩家', sellerAvatar: '#6C5CE7', sellerCredit: '信用极好', sellerSold: 45, desc: '买来玩了大半年，现在工作忙没时间玩了。光驱版带两个原装手柄，送三张实体游戏盘。' },
        { id: 7, title: '乐高兰博基尼42115 机械组 拼过一次', price: 1599, originalPrice: 2999, location: '杭州', wantCount: 45, image: 'https://picsum.photos/seed/lego/400/460', tag: '', category: 'toy', seller: '乐高爱好者', sellerAvatar: '#F9CA24', sellerCredit: '信用良好', sellerSold: 18, desc: '拼过一次就拆了放回盒子里了，零件齐全无缺失。说明书和外盒都在，适合收藏或送礼。' },
        { id: 8, title: '大疆DJI Mini 4 Pro 畅飞套装 带随心换', price: 5200, originalPrice: 6988, location: '武汉', wantCount: 98, image: 'https://picsum.photos/seed/drone/400/440', tag: '95新', category: 'digital', seller: '航拍爱好者', sellerAvatar: '#00B894', sellerCredit: '信用极好', sellerSold: 23, desc: '仅飞过3次，成色95新。畅飞套装含三块电池、充电管家、ND滤镜，随心换到2025年底。' },
        { id: 9, title: '始祖鸟Beta AR冲锋衣 男款L码 黑色', price: 3200, originalPrice: 5400, location: '南京', wantCount: 76, image: 'https://picsum.photos/seed/jacket/400/500', tag: '', category: 'clothes', seller: '户外装备党', sellerAvatar: '#2D3436', sellerCredit: '信用极好', sellerSold: 67, desc: '专柜正品购入，穿着不超过5次。Gore-Tex Pro面料，防水透气性能完好。L码185左右合适。' },
        { id: 10, title: 'Switch OLED王国之泪限定版 带游戏', price: 1800, originalPrice: 2599, location: '重庆', wantCount: 234, image: 'https://picsum.photos/seed/switch/400/430', tag: '包邮', category: 'digital', seller: '塞尔达铁粉', sellerAvatar: '#E17055', sellerCredit: '信用良好', sellerSold: 12, desc: '限定版Switch OLED，箱说全。带王国之泪卡带和Pro手柄，屏幕贴了钢化膜，无划痕。' },
        { id: 11, title: '婴儿推车 好孩子GB 轻便折叠 9成新', price: 399, originalPrice: 899, location: '杭州', wantCount: 34, image: 'https://picsum.photos/seed/stroller/400/470', tag: '', category: 'baby', seller: '宝妈闲置转让', sellerAvatar: '#FD79A8', sellerCredit: '信用极好', sellerSold: 89, desc: '宝宝大了用不上了，9成新，使用不到半年。一键折叠，可上飞机，带遮阳篷和雨罩。' },
        { id: 12, title: '《三体》全套三册 刘慈欣 精装版', price: 68, originalPrice: 158, location: '上海', wantCount: 189, image: 'https://picsum.photos/seed/book/400/510', tag: '', category: 'book', seller: '书虫的书架', sellerAvatar: '#A29BFE', sellerCredit: '信用极好', sellerSold: 456, desc: '精装硬壳版，只看过一遍，基本全新。三体1-3全集，书角无折痕，内页无笔记。' },
        { id: 13, title: '雅诗兰黛小棕瓶精华 100ml 全新', price: 520, originalPrice: 935, location: '北京', wantCount: 156, image: 'https://picsum.photos/seed/cream/400/390', tag: '', category: 'beauty', seller: '海淘小能手', sellerAvatar: '#D980FA', sellerCredit: '信用极好', sellerSold: 234, desc: '美国官网海淘购入，全新未开封。第七代小棕瓶，100ml大容量，保质期到2027年。' },
        { id: 14, title: '小米电动滑板车Pro 续航45km', price: 1599, originalPrice: 2799, location: '深圳', wantCount: 67, image: 'https://picsum.photos/seed/scooter/400/490', tag: '自提', category: 'sports', seller: '通勤一族', sellerAvatar: '#0984E3', sellerCredit: '信用良好', sellerSold: 8, desc: '公司搬家后不需要了，用了半年。续航实测40km+，最高时速25km/h，配件齐全。限深圳自提。' },
        { id: 15, title: '任天堂 amiibo 塞尔达传说 全套8款', price: 450, originalPrice: 800, location: '广州', wantCount: 41, image: 'https://picsum.photos/seed/amiibo/400/410', tag: '', category: 'toy', seller: 'Switch收藏家', sellerAvatar: '#E17055', sellerCredit: '信用极好', sellerSold: 156, desc: '全套8款塞尔达amiibo，仅拆封未使用。适合收藏，附赠收纳盒。不单出，打包一起出。' },
        { id: 16, title: '加拿大鹅羽绒服 Expedition派克大衣', price: 5800, originalPrice: 9900, location: '成都', wantCount: 112, image: 'https://picsum.photos/seed/goose/400/520', tag: '正品', category: 'clothes', seller: '奢侈品闲置', sellerAvatar: '#636E72', sellerCredit: '信用极好', sellerSold: 234, desc: '加拿大专柜购入，正品可验。只穿了一个冬天，保暖效果极好。送干洗店清洗过，成色很好。M码，适合175-185。' }
    ];

    // ===== 模拟消息数据 =====
    const mockMessages = [
        { id: 1, name: '数码达人小王', avatar: '#FF6B6B', preview: '好的，价格可以商量，你方便...', time: '刚刚', unread: 2, type: 'seller' },
        { id: 2, name: '科技宅小李', avatar: '#4ECDC4', preview: 'MacBook还在吗？', time: '5分钟前', unread: 0, type: 'buyer' },
        { id: 3, name: '闲鱼小助手', avatar: '#FF5000', preview: '您的宝贝"iPhone 15 Pro"获得...', time: '1小时前', unread: 1, type: 'system' },
        { id: 4, name: '潮鞋收藏家', avatar: '#FF8C00', preview: '43码我穿可能有点大...', time: '2小时前', unread: 0, type: 'buyer' },
        { id: 5, name: '居家好物推荐', avatar: '#45B7D1', preview: '已发货，请注意查收', time: '昨天', unread: 0, type: 'seller' },
        { id: 6, name: '游戏老玩家', avatar: '#6C5CE7', preview: 'PS5我已经拍下了', time: '昨天', unread: 0, type: 'buyer' },
        { id: 7, name: '系统通知', avatar: '#999', preview: '您的账号安全等级已提升', time: '3天前', unread: 0, type: 'system' },
        { id: 8, name: '美妆代购小美', avatar: '#F06292', preview: '神仙水还有吗？我想要', time: '3天前', unread: 0, type: 'buyer' }
    ];

    // ===== 模拟鱼塘数据 =====
    const mockFishponds = [
        { id: 1, icon: '📱', title: '数码爱好者', desc: '12.6万人', color: '#E8F5FF' },
        { id: 2, icon: '👟', title: '潮鞋交流圈', desc: '8.3万人', color: '#FFF0E8' },
        { id: 3, icon: '💄', title: '美妆闲置交换', desc: '15.2万人', color: '#FFE8F0' },
        { id: 4, icon: '🎮', title: '主机游戏玩家', desc: '9.7万人', color: '#F0E8FF' },
        { id: 5, icon: '🏠', title: '家居好物分享', desc: '6.8万人', color: '#E8FFE8' },
        { id: 6, icon: '👶', title: '宝妈闲置群', desc: '11.4万人', color: '#FFF8E8' },
        { id: 7, icon: '📚', title: '二手书交易', desc: '5.2万人', color: '#FFE8E8' },
        { id: 8, icon: '🏃', title: '运动装备', desc: '7.1万人', color: '#E8F0FF' }
    ];

    // ===== 状态管理 =====
    let state = {
        currentPage: 'home',
        currentCategory: 'all',
        currentBanner: 0,
        bannerTimer: null,
        products: [...mockProducts],
        favorites: new Set(),
        currentDetailProduct: null,
        currentChatUser: null,
        chatMessages: [],
        loadedCount: 8
    };

    // ===== Toast 提示 =====
    const toast = $('#toast');
    function showToast(msg, duration = 2000) {
        toast.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    }

    // ===== 渲染商品列表（瀑布流） =====
    function renderProducts(filter = 'all') {
        const productList = $('#productList');
        if (!productList) return;
        
        let filtered = filter === 'all' ? state.products : state.products.filter(p => p.category === filter);
        
        productList.innerHTML = filtered.map(p => `
            <div class="product-card" data-id="${p.id}">
                <div class="product-img-wrap">
                    <img src="${p.image}" alt="${p.title}" loading="lazy"
                         onerror="this.style.minHeight='${160 + Math.random()*80}px';this.style.background='linear-gradient(135deg,#f0f0f0,#e0e0e0)'">
                    ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-title">${p.title}</div>
                    <div class="product-price"><span class="unit">¥</span>${p.price}</div>
                    <div class="product-meta">
                        <span class="product-location">
                            <svg viewBox="0 0 24 24" width="10" height="10"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#999"/></svg>
                            ${p.location}
                        </span>
                        <span class="product-want">${p.wantCount}人想要</span>
                    </div>
                </div>
            </div>
        `).join('');

        // 绑定商品点击 - 打开详情
        productList.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                const product = state.products.find(p => p.id === id);
                if (product) openDetail(product);
            });
        });
    }

    // ===== 切换分类 =====
    function switchCategory(cat) {
        state.currentCategory = cat;
        $$('.category-item').forEach(item => {
            item.classList.toggle('active', item.dataset.cat === cat);
        });
        renderProducts(cat);
        const activeItem = document.querySelector(`.category-item[data-cat="${cat}"]`);
        if (activeItem) {
            activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }

    // ===== Banner 轮播 =====
    function initBanner() {
        const bannerSlider = $('#bannerSlider');
        const bannerDots = $('#bannerDots');
        if (!bannerSlider || !bannerDots) return;
        
        const dots = bannerDots.querySelectorAll('.dot');
        const total = dots.length;

        function goToSlide(index) {
            state.currentBanner = index;
            bannerSlider.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
        }

        function nextSlide() { goToSlide((state.currentBanner + 1) % total); }

        state.bannerTimer = setInterval(nextSlide, 3000);

        let startX = 0;
        bannerSlider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            clearInterval(state.bannerTimer);
        });
        bannerSlider.addEventListener('touchend', (e) => {
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                goToSlide(diff > 0 ? (state.currentBanner + 1) % total : (state.currentBanner - 1 + total) % total);
            }
            state.bannerTimer = setInterval(nextSlide, 3000);
        });
    }

    // ===== 商品详情浮层 =====
    function openDetail(product) {
        state.currentDetailProduct = product;
        const overlay = $('#detailOverlay');
        if (!overlay) return;

        $('#detailImages').innerHTML = `<img src="${product.image}" alt="${product.title}">`;
        $('#detailPrice').innerHTML = `<span class="unit">¥</span>${product.price}<span style="font-size:13px;color:#999;font-weight:400;margin-left:8px;text-decoration:line-through">¥${product.originalPrice}</span>`;
        $('#detailTitle').textContent = product.title;
        $('#detailTags').innerHTML = product.tag ? `<span class="detail-tag">${product.tag}</span>` : '';
        $('#detailDesc').textContent = product.desc || '卖家很懒，还没有填写描述...';

        $('#detailSeller').innerHTML = `
            <div class="detail-seller-avatar" style="background:${product.sellerAvatar || '#f0f0f0'};color:#fff;font-size:18px;font-weight:600">${product.seller.charAt(0)}</div>
            <div class="detail-seller-info">
                <div class="detail-seller-name">${product.seller}</div>
                <div class="detail-seller-badge">${product.sellerCredit || '信用良好'}</div>
            </div>
            <div class="detail-seller-stats">已卖出${product.sellerSold || 0}件</div>
        `;

        // 收藏状态
        const btnFav = $('#btnFav');
        if (state.favorites.has(product.id)) {
            btnFav.classList.add('faved');
            btnFav.querySelector('span').textContent = '已收藏';
        } else {
            btnFav.classList.remove('faved');
            btnFav.querySelector('span').textContent = '收藏';
        }

        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeDetail() {
        const overlay = $('#detailOverlay');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    // ===== 聊天浮层 =====
    function openChat(user) {
        state.currentChatUser = user;
        state.chatMessages = [
            { text: '你好，这个宝贝还在吗？', me: true },
            { text: '在的，亲想要的话可以直接拍哦~', me: false },
            { text: '价格还能便宜点吗？', me: true },
            { text: '可以小刀哦，您说个心理价位', me: false }
        ];

        const overlay = $('#chatOverlay');
        if (!overlay) return;

        $('#chatName').textContent = user.name || user.seller || '卖家';
        renderChatMessages();
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            const input = $('#chatInput');
            if (input) input.focus();
        }, 300);
    }

    function closeChat() {
        const overlay = $('#chatOverlay');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    function renderChatMessages() {
        const container = $('#chatMessages');
        if (!container) return;
        container.innerHTML = state.chatMessages.map(m => `
            <div class="chat-bubble ${m.me ? 'me' : 'other'}">${m.text}</div>
        `).join('');
        container.scrollTop = container.scrollHeight;
    }

    function sendMessage() {
        const input = $('#chatInput');
        if (!input) return;
        const text = input.value.trim();
        if (!text) return;

        state.chatMessages.push({ text, me: true });
        input.value = '';
        renderChatMessages();

        // 模拟回复
        setTimeout(() => {
            const replies = [
                '好的，我考虑一下~',
                '可以，那就这么定了',
                '已发货，请注意查收',
                '在的，随时可以拍',
                '可以小刀，您说个价'
            ];
            state.chatMessages.push({ text: replies[Math.floor(Math.random() * replies.length)], me: false });
            renderChatMessages();
        }, 800 + Math.random() * 1200);
    }

    // ===== 渲染消息列表 =====
    function renderMessages(filter = 'all') {
        const list = $('#messageList');
        if (!list) return;
        
        let filtered = filter === 'all' ? mockMessages : mockMessages.filter(m => m.type === filter);
        
        list.innerHTML = filtered.map(m => `
            <div class="message-item" data-id="${m.id}">
                <div class="msg-avatar" style="background:${m.avatar}">${m.name.charAt(0)}</div>
                <div class="msg-content">
                    <div class="msg-title">${m.name}</div>
                    <div class="msg-preview">${m.preview}</div>
                </div>
                <div style="text-align:right;flex-shrink:0">
                    <div class="msg-time">${m.time}</div>
                    ${m.unread > 0 ? `<div class="msg-unread">${m.unread}</div>` : ''}
                </div>
            </div>
        `).join('');

        list.querySelectorAll('.message-item').forEach(item => {
            item.addEventListener('click', () => {
                const msg = mockMessages.find(m => m.id === parseInt(item.dataset.id));
                if (msg) openChat({ name: msg.name });
            });
        });
    }

    // ===== 渲染鱼塘列表 =====
    function renderFishponds() {
        const grid = $('#fishpondList');
        if (!grid) return;
        
        grid.innerHTML = mockFishponds.map(fp => `
            <div class="fp-card">
                <div class="fp-card-icon">${fp.icon}</div>
                <div class="fp-card-title">${fp.title}</div>
                <div class="fp-card-desc">${fp.desc}</div>
            </div>
        `).join('');

        grid.querySelectorAll('.fp-card').forEach((card, i) => {
            card.addEventListener('click', () => {
                showToast(`正在进入${mockFishponds[i].title}...`);
            });
        });
    }

    // ===== 页面切换 =====
    function switchPage(page) {
        state.currentPage = page;

        $$('.page').forEach(p => p.classList.remove('active'));

        const pageMap = {
            'home': 'pageHome',
            'messages': 'pageMessages',
            'profile': 'pageProfile',
            'publish': 'pagePublish',
            'fishpond': 'pageFishpond'
        };

        const pageId = pageMap[page] || 'pageHome';
        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');

        $$('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.page === page);
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (page === 'home') renderProducts(state.currentCategory);
        if (page === 'messages') renderMessages();
        if (page === 'fishpond') renderFishponds();
    }

    // ===== 事件绑定 =====
    function bindEvents() {
        // 底部导航
        $$('.nav-item').forEach(item => {
            item.addEventListener('click', () => switchPage(item.dataset.page));
        });

        // 分类切换
        const categoryScroll = $('#categoryScroll');
        if (categoryScroll) {
            categoryScroll.addEventListener('click', (e) => {
                const item = e.target.closest('.category-item');
                if (item) switchCategory(item.dataset.cat);
            });
        }

        // 分类更多
        const categoryMoreBtn = $('#categoryMoreBtn');
        if (categoryMoreBtn) {
            categoryMoreBtn.addEventListener('click', () => {
                categoryScroll.scrollTo({ left: 0, behavior: 'smooth' });
                switchCategory('all');
            });
        }

        // 城市选择
        const locationBtn = $('#locationBtn');
        const locationModal = $('#locationModal');
        if (locationBtn && locationModal) {
            locationBtn.addEventListener('click', () => locationModal.classList.add('show'));
            $('#closeLocationModal').addEventListener('click', () => locationModal.classList.remove('show'));
            locationModal.addEventListener('click', (e) => {
                if (e.target === locationModal) locationModal.classList.remove('show');
            });
            $$('.city-tag').forEach(tag => {
                tag.addEventListener('click', () => {
                    const locText = $('.location-text');
                    if (locText) locText.textContent = tag.textContent;
                    locationModal.classList.remove('show');
                    showToast(`已切换到${tag.textContent}`);
                });
            });
        }

        // 详情浮层关闭
        const detailOverlay = $('#detailOverlay');
        if (detailOverlay) {
            $('#detailClose').addEventListener('click', closeDetail);
            detailOverlay.addEventListener('click', (e) => {
                if (e.target === detailOverlay) closeDetail();
            });
        }

        // 详情浮层按钮
        const btnFav = $('#btnFav');
        if (btnFav) {
            btnFav.addEventListener('click', () => {
                const product = state.currentDetailProduct;
                if (!product) return;
                if (state.favorites.has(product.id)) {
                    state.favorites.delete(product.id);
                    btnFav.classList.remove('faved');
                    btnFav.querySelector('span').textContent = '收藏';
                    showToast('已取消收藏');
                } else {
                    state.favorites.add(product.id);
                    btnFav.classList.add('faved');
                    btnFav.querySelector('span').textContent = '已收藏';
                    showToast('已加入收藏');
                }
            });
        }

        const btnChat = $('#btnChat');
        if (btnChat) {
            btnChat.addEventListener('click', () => {
                const product = state.currentDetailProduct;
                if (product) {
                    closeDetail();
                    setTimeout(() => openChat({ name: product.seller }), 300);
                }
            });
        }

        const btnWant = $('#btnWant');
        if (btnWant) {
            btnWant.addEventListener('click', () => {
                const product = state.currentDetailProduct;
                if (product) {
                    showToast('已提交购买意向，等待卖家确认');
                    setTimeout(closeDetail, 1500);
                }
            });
        }

        // 聊天浮层
        const chatOverlay = $('#chatOverlay');
        if (chatOverlay) {
            $('#chatBack').addEventListener('click', closeChat);
            $('#btnSend').addEventListener('click', sendMessage);
            const chatInput = $('#chatInput');
            if (chatInput) {
                chatInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') sendMessage();
                });
            }
        }

        // 消息按钮
        const msgBtn = $('#msgBtn');
        if (msgBtn) {
            msgBtn.addEventListener('click', () => switchPage('messages'));
        }

        // 消息标签切换
        $$('.msg-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                $$('.msg-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderMessages(tab.dataset.tab);
            });
        });

        // 搜索
        const searchInput = $('#searchInput');
        if (searchInput) {
            searchInput.addEventListener('focus', () => {
                searchInput.removeAttribute('readonly');
                showToast('输入关键词搜索闲置好物');
            });
            searchInput.addEventListener('blur', () => {
                if (!searchInput.value) searchInput.setAttribute('readonly', '');
            });
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const keyword = searchInput.value.trim();
                    const productList = $('#productList');
                    if (keyword && productList) {
                        const filtered = state.products.filter(p =>
                            p.title.toLowerCase().includes(keyword.toLowerCase())
                        );
                        productList.innerHTML = filtered.length ?
                            filtered.map(p => renderProductCardHTML(p)).join('') :
                            '<div class="load-more">没有找到相关宝贝</div>';
                        productList.querySelectorAll('.product-card').forEach(card => {
                            card.addEventListener('click', () => {
                                const id = parseInt(card.dataset.id);
                                const product = state.products.find(p => p.id === id);
                                if (product) openDetail(product);
                            });
                        });
                    } else if (productList) {
                        renderProducts(state.currentCategory);
                    }
                }
            });
        }

        // 扫码按钮
        const scanBtn = $('#scanBtn');
        if (scanBtn) {
            scanBtn.addEventListener('click', () => showToast('扫码搜索功能开发中...'));
        }

        // 换一批按钮
        const refreshBtn = $('#refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                state.products = [...mockProducts].sort(() => Math.random() - 0.5);
                renderProducts(state.currentCategory);
                showToast('已刷新推荐');
            });
        }

        // 快捷入口
        $$('.entry-item').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                if (action === 'publish') switchPage('publish');
                else if (action === 'fishpond') switchPage('fishpond');
                else showToast('功能开发中...');
            });
        });

        // 发布按钮
        const publishBtn = $('.btn-publish');
        if (publishBtn) {
            publishBtn.addEventListener('click', () => {
                showToast('发布成功！');
                setTimeout(() => switchPage('home'), 1500);
            });
        }

        // 上传区域
        const uploadArea = $('#uploadArea');
        if (uploadArea) {
            uploadArea.addEventListener('click', () => showToast('选择图片上传'));
        }

        // 编辑资料
        const btnEditProfile = $('.btn-edit-profile');
        if (btnEditProfile) {
            btnEditProfile.addEventListener('click', () => showToast('编辑资料功能开发中...'));
        }

        // 菜单项点击
        $$('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const text = item.querySelector('span').textContent;
                showToast(`${text}功能开发中...`);
            });
        });

        // 订单图标
        $$('.order-icon-item').forEach(item => {
            item.addEventListener('click', () => {
                const text = item.querySelector('span').textContent;
                showToast(`查看${text}订单`);
            });
        });

        // 返回顶部
        const btnBackTop = $('#btnBackTop');
        if (btnBackTop) {
            btnBackTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            window.addEventListener('scroll', () => {
                btnBackTop.classList.toggle('show', window.scrollY > 500);
            });
        }

        // 上拉加载更多
        const loadMore = $('#loadMore');
        if (loadMore) {
            loadMore.addEventListener('click', () => {
                showToast('加载中...');
                setTimeout(() => {
                    const extra = mockProducts.map(p => ({ ...p, id: p.id + 100 }));
                    state.products = [...state.products, ...extra];
                    renderProducts(state.currentCategory);
                    showToast('加载完成');
                }, 800);
            });
        }

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDetail();
                closeChat();
                const locationModal = $('#locationModal');
                if (locationModal) locationModal.classList.remove('show');
            }
        });

        // 状态栏时间更新
        updateStatusBarTime();
        setInterval(updateStatusBarTime, 30000);
    }

    function updateStatusBarTime() {
        const timeEl = $('.time');
        if (timeEl) {
            const now = new Date();
            timeEl.textContent = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        }
    }

    function renderProductCardHTML(p) {
        return `
            <div class="product-card" data-id="${p.id}">
                <div class="product-img-wrap">
                    <img src="${p.image}" alt="${p.title}" loading="lazy">
                    ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-title">${p.title}</div>
                    <div class="product-price"><span class="unit">¥</span>${p.price}</div>
                    <div class="product-meta">
                        <span class="product-location">
                            <svg viewBox="0 0 24 24" width="10" height="10"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#999"/></svg>
                            ${p.location}
                        </span>
                        <span class="product-want">${p.wantCount}人想要</span>
                    </div>
                </div>
            </div>
        `;
    }

    // ===== 初始化 =====
    function init() {
        renderProducts();
        initBanner();
        bindEvents();
        switchPage('home');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();