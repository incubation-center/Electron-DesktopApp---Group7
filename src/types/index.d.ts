/**
 * Model User
 *
 */
export type User = {
  id: number;
  email: string;
  password: string;
  role: RoleEnumType;
  schoolId: number;
};

/**
 * Model RefreshToken
 *
 */
export type RefreshToken = {
  id: string;
  hashedToken: string;
  userId: number;
  revoked: boolean;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Model School
 *
 */
export type School = {
  id: number;
  name: string;
  address: string | null;
  phone: string | null;
  email: string;
  website: string | null;
  logo: string | null;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

/**
 * Model Student
 *
 */
export type Student = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  password: string | null;
  schoolId: number | null;
  userId: number | null;
};

export type StudentInput = {
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  password: string;
};

/**
 * Model Teacher
 *
 */
export type Teacher = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  userId: number;
  schoolId: number;
};

/**
 * Model Class
 *
 */
export type Class = {
  id: number;
  name: string;
  section: string;
  schoolId: number;
};

/**
 * Model Subject
 *
 */
export type Subject = {
  id: number;
  name: string;
  code: string | null;
  classId: number;
  schoolId: number;
  teacherId: number;
};

/**
 * Model Exam
 *
 */
export type Exam = {
  id: number;
  name: string;
  date: Date;
  schoolId: number;
  subjectId: number;
};

/**
 * Model Result
 *
 */
export type Result = {
  id: number;
  mark: number;
  schoolId: number;
  studentId: number;
  examId: number;
};

/**
 * Model Attendance
 *
 */
export type Attendance = {
  id: number;
  date: Date;
  status: string | null;
  attendanceType: AttendanecEnumType;
  teacherId: number;
  subjectId: number;
  schoolId: number;
  studentId: number;
};

/**
 * Model Fee
 *
 */
export type Fee = {
  id: number;
  name: string;
  amount: number;
  schoolId: number;
};

/**
 * Model Payment
 *
 */
export type Payment = {
  id: number;
  date: Date;
  amount: number;
  schoolId: number;
  studentId: number;
  feeId: number;
};

/**
 * Model Expense
 *
 */
export type Expense = {
  id: number;
  name: string;
  amount: number;
  date: Date;
  schoolId: number;
};

/**
 * Model Event
 *
 */
export type Event = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  url: string | null;
  className: string | null;
  backgroundColor: string | null;
  borderColor: string | null;
  textColor: string | null;
  image: string | null;
  description: string | null;
  subjectId: number;
  teacherId: number;
  studentId: number;
  schoolId: number;
};

/**
 * Model Notice
 *
 */
export type Notice = {
  id: number;
  title: string;
  details: string;
  date: Date;
  schoolId: number;
};

/**
 * Model Message
 *
 */
export type Message = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  schoolId: number;
};

/**
 * Model Setting
 *
 */
export type Setting = {
  id: number;
  name: string;
  value: string;
  schoolId: number;
};

/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const AttendanecEnumType: {
  present: "present";
  absent: "absent";
  leave: "leave";
};

export type AttendanecEnumType =
  typeof AttendanecEnumType[keyof typeof AttendanecEnumType];

export const RoleEnumType: {
  admin: "admin";
  teacher: "teacher";
  student: "student";
};

export type RoleEnumType = typeof RoleEnumType[keyof typeof RoleEnumType];

/**
 * Model Auth
 *
 */

export type AuthLogin = {
  email: string;
  password: string;
};

export type AuthRegister = {
  email: string;
  password: string;
  name: string;
};
