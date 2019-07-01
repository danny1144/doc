# 自动部署脚本  
# 构建
npm run build
# 导航到构建输出目录
cd docs/.vuepress/dist
echo 'blog.flooor.top' >CNAME
git init
git add -A
git commit -m 'deploy'
git checkout  -b gh-pages
# 推到你仓库的 master 分支
git push -f https://github.com/danny1144/doc.git gh-pages