const Env = 'development';
let config = {
  env: Env,
  basicUrl: Env == 'development' ? 'http://api.uooc.online:8088' : Env === 'www' ? 'http://www.uooconline.com' : Env === 'beta' ? 'http://beta.uooconline.com' : 'http://test.uooconline.com',
  docUrl: Env == 'development' ? 'http://doc210.uooc.online/upload/index' : Env === 'www' ? 'http://doc.uooconline.com/upload/index' : 'http://doc-beta.uooconline.com/upload/index'
};
export default config;

