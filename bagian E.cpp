#include <iostream>

// Fungsi untuk menampilkan elemen-elemen array
void displayArray(int arr[], int size) {
    for (int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    const int arraySize = 5;
    int myArray[arraySize] = {1, 2, 3, 4, 5};

    std::cout << "Isi array sebelum perubahan: ";
    displayArray(myArray, arraySize);

    // Memanggil fungsi displayArray dengan array sebagai argumen
    std::cout << "Isi array setelah perubahan: ";
    displayArray(myArray, arraySize);

    return 0;
}
