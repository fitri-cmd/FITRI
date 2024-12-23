#include <iostream>
#include <string>

// Definisi struktur (structure) untuk representasi data siswa
struct Student {
    std::string name;
    int age;
    float gpa;
};

// Fungsi untuk menampilkan data siswa
void displayStudent(Student student) {
    std::cout << "Nama: " << student.name << std::endl;
    std::cout << "Usia: " << student.age << std::endl;
    std::cout << "IPK: " << student.gpa << std::endl;
}

int main() {
    // Membuat objek siswa
    Student student1 = {"Farhan", 20, 3.1};

    // Memanggil fungsi displayStudent dengan objek siswa sebagai argumen
    std::cout << "Informasi Siswa:" << std::endl;
    displayStudent(student1);

    return 0;
}

