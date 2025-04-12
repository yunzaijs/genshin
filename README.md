## genshin

该插件完全依赖于喵喵插件

请先安装喵喵插件后再安装

```sh
# 定义仓库地址
REPO_URL="https://gitee.com/yoimiya-kokomi/miao-plugin.git"
# 定义目标目录
TARGET_DIR="./plugins/miao-plugin/"
# 克隆喵喵插件
git clone --depth=1 $REPO_URL $TARGET_DIR
```

```sh
# 定义仓库地址
REPO_URL="https://gitee.com/yunzaijs/genshin.git"
# 定义目标目录
TARGET_DIR="./plugins/genshin/"
# 获取tag最新版
LATEST_TAG=$(git ls-remote --tags $REPO_URL | awk -F'/' '{print $NF}' | sort -V | tail -n1)
# 克隆原神插件
git clone --depth=1 --branch $LATEST_TAG $REPO_URL $TARGET_DIR
```

### 帮助

[点击了解所有指令](./README_HELP.md)
