# 自动部署脚本  
git add -A
git commit -m $1
git push
# 构建
npm run build
# 导航到构建输出目录
cd docs/.vuepress/dist
echo 'blog.fucos.top' >CNAME
git init
git add -A
git commit -m $1
git checkout  -b gh-pages
# 推到你仓库的 master 分支
git push -f https://github.com/danny1144/doc.git gh-pages