function FindProxyForURL(url, host) {
 // Bypass proxy for specific domains
 if (shExpMatch(url, "*microsoft.com*") ||
    shExpMatch(url, "*microsoftonline.com*") ||
    shExpMatch(url, "*microsoftonline.us*")) 
   return "DIRECT";  
 
 // Route all other traffic through the proxy
 else return "PROXY turbo-2eso7e8d.edge.prod.fortisase.com:9443";
}