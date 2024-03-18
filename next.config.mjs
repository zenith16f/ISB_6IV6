import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

const millionConfig = {
  auto: true,
};

export default million.next(nextConfig, millionConfig);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   // other config here...
// };

// export default module.exports = nextConfig;
