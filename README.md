# My blog
# 如何查看金鑰

1. 生成 ssh key

```PS
ssh-keygen -t ed25519 -C "ch4blog" -f $env:USERPROFILE\.ssh\id_ed25519_ch4blog
```

2. 查詢公鑰密碼並貼到 `github > settings > SSH and GPG keys > New SSH key`

```PS
type $env:USERPROFILE\.ssh\id_ed25519_ch4blog.pub
```

3. 設定專案的 repo push 的地方

```PS
PS C:\ch4blog>  git remote set-url origin git@github.com:ch4blog/ch4blog.github.io.git

PS C:\ch4blog>  git remote -v                                           
origin  git@github.com:ch4blog/ch4blog.github.io.git (fetch)
origin  git@github.com:ch4blog/ch4blog.github.io.git (push)
```

4. 驗證是否正確

```PS
PS C:\ch4blog>  ssh -i $env:USERPROFILE\.ssh\id_ed25519_ch4blog -T git@github.com
Hi ch4blog! You've successfully authenticated, but GitHub does not provide shell access.
```