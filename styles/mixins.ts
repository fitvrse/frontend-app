export const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`

export const flexBetween = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const gridCenter = `
  display: grid;
  place-items: center;
`

export const absoluteCenter = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const truncateText = `
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const hideScrollbar = `
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
