#include <stdio.h> //#include가 뭔가요? (해결)

int main() {
    int dori;
    char baba;
    int deru;

    scanf("%d,%c,%d" , &dori , &baba, &deru);
    printf("%d, %c, %d" , dori, baba, deru);

    return 0;
}

// Output : 뺀 값.
//printf한 개
10,a,25
10, a, 25




값을 저장할 메모리 공간의 이름 -> 변수

집 => 변수(집이름)
정수, 실수, 문자, 문자열
int, (float, double), char