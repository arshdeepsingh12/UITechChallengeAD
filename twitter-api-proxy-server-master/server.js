var twitterProxyServer = require('twitter-proxy');
var port = process.env.PORT || 5000;
port = port.toString();
twitterProxyServer({
	consumerKey: 'Pyobk2CtVn4sGou0PEl9wq1Vc',
	consumerSecret: '9mVETMZXkkZ9CcJMrjhpqd2tKBSSQ3ezo9GgpMmp2z1l4fMe48',
	accessToken: "490545431-lsxKv6QWkxJZDFoQy1JHeFpUvHC8x7mTDISTsDPM",
	accessTokenSecret: "eKWOkmPTNGgxfQE6h2avGSSscQ8aEiupmELPUD7J4H16I",
	port: port
});
