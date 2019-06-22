# 自动部署脚本  
# 构建
npm run build
git add -A
git commit -m 'deploy'
# 推到你仓库的 master 分支
git push -f https://github.com/danny1144/doc.git master