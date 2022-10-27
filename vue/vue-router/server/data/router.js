module.exports = [
  {
    id: 2,
    pid: 0,
    path: '/course',
    name: 'Course',
    title: '课程管理'
  },
  {
    id: 3,
    pid: 2,
    path: 'operate',
    name: 'CourseOperate',
    link: '/course/operate',
    title: '课程操作'
  },
  {
    id: 4,
    pid: 3,
    path: 'info_data',
    name: 'CourseInfoData',
    link: '/course/operate/info_data',
    title: '课程数据'
  },
  {
    id: 5,
    pid: 2,
    path: 'add',
    name: 'CourseAdd',
    link: '/course/add',
    title: '增加课程'
  },
  {
    id: 6,
    pid: 0,
    path: '/student',
    name: 'Student',
    title: '学生管理'
  },
  {
    id: 7,
    pid: 6,
    path: 'operate',
    name: 'StudentOperate',
    link: '/student/operate',
    title: '学生操作'
  },
  {
    id: 8,
    pid: 6,
    path: 'add',
    name: 'SudentAdd',
    link: '/student/add',
    title: '增加学生'
  },
];