function FindProxyForURL (url, host) {
  /* vpn 127.0.0.1:4455 */
  
  /* Youtube */
  if (shExpMatch(host, "*.youtube.com"))
    return "SOCKS5 127.0.0.1:4455;SOCKS 127.0.0.1:4455";
  if (shExpMatch(host, "youtube.com"))
    return "SOCKS5 127.0.0.1:4455;SOCKS 127.0.0.1:4455";
  
  /* LinkedIn */
  if (shExpMatch(host, "*.linkedin.com"))
    return "SOCKS5 127.0.0.1:4455;SOCKS 127.0.0.1:4455";
  if (shExpMatch(host, "linkedin.com"))
    return "SOCKS5 127.0.0.1:4455;SOCKS 127.0.0.1:4455";

   /* Instagram */
  if (shExpMatch(host, "*.instagram.com"))
    return "SOCKS5 127.0.0.1:4455;SOCKS 127.0.0.1:4455";
  if (shExpMatch(host, "instagram.com"))
    return "SOCKS5 127.0.0.1:4455;SOCKS 127.0.0.1:4455";

 /* Facebook */
  if (shExpMatch(host, "*.facebook.com"))
    return "SOCKS5 127.0.0.1:4455;SOCKS 127.0.0.1:4455";
  if (shExpMatch(host, "facebook.com"))
    return "SOCKS5 127.0.0.1:4455;SOCKS 127.0.0.1:4455";

/* Direct */
  return 'DIRECT';
}
