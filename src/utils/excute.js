import { promises as fs } from "fs";

export class LessonManager {
  constructor(filePath = "./public/data.json") {
    this.filePath = filePath;
    this.data = null; // Lưu trữ dữ liệu JSON sau khi load
  }

  // Load file JSON từ disk và lưu trữ vào this.data
  async loadData() {
    if (this.data) return;
    try {
      const file = await fs.readFile(this.filePath, "utf8");
      this.data = JSON.parse(file);
    } catch (error) {
      console.error("Error loading JSON file:", error);
      throw new Error("Unable to load data file.");
    }
  }

  // Trích xuất tất cả bài học từ các chủ đề
  getAllLessons() {
    if (!this.data) throw new Error("Data not loaded. Call loadData() first.");
    return this.data.topics.flatMap((topic) => topic.lessons);
  }

  // Tìm bài học theo `no`
  findLessonByNo(no) {
    if (!this.data) throw new Error("Data not loaded. Call loadData() first.");
    return this.getAllLessons().find((lesson) => lesson.no === +no);
  }
}
