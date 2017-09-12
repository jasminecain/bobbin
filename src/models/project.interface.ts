export interface Photo {
  id: string,
  image: string
}

export interface Item {
  id: string,
  projectId: string,
  name: string
}

export interface Project {
  id: string,
  name: string,
  description: string,
  image: string,
  url: string,
  items: Item[],
  photos: Photo[],
}
