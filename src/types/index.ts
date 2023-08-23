export type UserType = {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
  profilePic: string,
  role: string
}

export type CourseType = {
  _id: string,
  title: string,
  subtitle: string,
  description: string,
  department: string,
  thumbnail: string,
  instructorId: UserType,
  status: string,
  rating: number,

  objectives: {
    objective: string
  }[],
  requirements: {
    requirement: string
  }[],
  intendedlearners: {
    learner: string
  }[],

  modules: ModuleType[]
  discussions: DiscussionType[]
  reviews: ReviewType[]
}

export type DiscussionType = {
  _id: string,
  title: string,
  discription: string
}


export type ReviewType = {
  _id: string,
  comment: string,
  rating: number,
  userId: UserType,
  courseId: CourseType
}

export type ModuleType = {
  _id: string,
  title: string,
  description: string,
  lectures: LectureType[]
}

export type LectureType = {
  _id: string,
  title: string,
  description: string,
  videoUrl: string,
  resources: ResourceType[]
  courseId: string
}

export type CourseProgressType = {
  userId: string,
  courseId: string,
  lecturesProgress: LectureProgressType[]
}

export type LectureProgressType = {
  lectureId: string,
  progress: number,
}

export type ResourceType = {
  _id: string,
  title: string,
  url: string
}

export type IApiError = {
  message: string;
  description: string;
  statusCode: string | number;
}
