const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.cluster0.dn4tsdj.mongodb.net",
  (error, addresses) => {
    if (error) {
      console.error("DNS ERROR:", error);
      return;
    }

    console.log("DNS SUCCESS:");
    console.log(addresses);
  }
);