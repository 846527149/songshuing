//seo帮助类
var seoMixin = {
    data() {
        return {
            seoTitle: '景海园林造型松基地',
            seoKeywords: '造型松树，造型盆景，黑松，油松，盆景',
            seoDescription: '景海园林造型松基地'
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