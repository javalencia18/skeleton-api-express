export const NODE_ENV: string = process.env.NODE_ENV ?? "development"

export const PORT_APP: number = (process.env.PORT !== null &&
  process.env.PORT !== undefined)
  ? Number(process.env.PORT)
  : 3001
