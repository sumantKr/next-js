module.exports = {
    webpack: true,
    webpack: (config) => {
      config.resolve.fallback = { 
        fs: false,
        path:false
    };
  
      return config;
    },
  };