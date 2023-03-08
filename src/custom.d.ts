/**
 * 只要import以css结尾的文件时，都会遵循以下约定：
 * 约定的内容：将会导出key所在的对象，
 * 而原始的类名和相应值都将会转化为这个对象
 */
declare module "*.css" {
  const css: {[key: string]: string}
  export default css
}