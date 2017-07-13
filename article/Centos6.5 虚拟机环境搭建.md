# Centos6.5 虚拟机环境搭建

1. vm安装centos6.5
2. `/etc/sysconfig/network-scripts/ifcfg-eth0`是`IP`及其他网络设置
3. `service network restart`重启网络
4. 如果`ifconfig`只有`lo`没有网关的话，需要在`/etc/rc.d/rc.local`文件中加入`ifup eth0`
5. `yum -y install samba`用于映射到本地
6. `/etc/samba/smb.conf`文件用来修改映射的名字跟路径及权限
7. `smbpasswd -a username`增加smb的用户
7. `service iptables stop`关闭
8. `setenforce 0`并且把`/etc/selinux/config`中的`SELINUX=enforcing`改为`SELINUX=disabled`
