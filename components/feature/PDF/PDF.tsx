import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

type Question = {
  equation: string;
  answer: number;
  id: number;
};

type Props = {
  questions: Question[][];
};

Font.register({
  family: "NotoSansJP",
  fonts: [
    {
      src: "/fonts/NotoSansJP-Regular.ttf",
    },
    {
      src: "/fonts/NotoSansJP-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "NotoSansJP",
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },
  questionsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  questionColumn: {
    // make 5 columns
    flex: "1 0 18%",
    padding: 6,
    marginBottom: 10,
  },
  eachQuestion: {
    fontSize: 14,
    marginBottom: 15,
  },
  answer: {
    color: "red",
  },
});

const PDF = ({ questions }: Props) => {
  return (
    <Document>
      <Page size="A3" style={styles.page} orientation="landscape">
        <View>
          <Text style={styles.header}>問題をといてみよう！</Text>
        </View>
        <View style={styles.questionsContainer}>
          {questions.map((section, index) => (
            <View key={index} style={styles.questionColumn}>
              {section.map((question) => (
                <Text key={question.id} style={styles.eachQuestion}>
                  問題{question.id + 1}. {question.equation}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
