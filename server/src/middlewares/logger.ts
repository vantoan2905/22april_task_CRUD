

export const logger = (req: any, res: any, message: any) => {
  console.log(`${req.method} ${req.url}`, message);
  // next();
};