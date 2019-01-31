//seo帮助类
var seoMixin = {
    data() {
        return {
            seoTitle: '景海造型松树基地-油松_黑松_盆景_景观松+全国最大造型松基地',
            seoKeywords: '造型松树，造型油松，造型黑松，造型松，盆景，泰山松，整形松树，油松，平顶松，景观松，景观松树，山东景海园林。',
            seoDescription: '山东景海园林造型松树基地提供优质造型松树，造型松，黑松，油松，景观松，泰山松。选购电话：13206349983'
        }
    },
    methods: {
        seoMap(title, keywords, description) {
            if (!title || !keywords || !description) {
                return;
            }
            this.seoTitle = title;
            this.seoKeywords = keywords;
            this.seoDescription = description;
        }
    },
    metaInfo() { //初始化seo信息
        return {
            title: this.seoTitle,
            meta: [{ name: 'keywords', content: this.seoKeywords },
                { name: 'description', content: this.seoDescription }
            ]
        }
    }
}
export default seoMixin