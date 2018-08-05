import java.util.regex.Matcher;
import java.util.regex.Pattern;

//Na workspace aluraJavaOO, tem essa clase
public class TesteRegex {

	public static void main(String[] args) {
		
		Pattern pattern = Pattern.compile("(\\d\\d)(\\w)");
		Matcher matcher = pattern.matcher("11a22b33c");
		
		while(matcher.find()) {
			String match = matcher.group();
			String grupo1 = matcher.group(1);
			String grupo2 = matcher.group(2);
			int start = matcher.start();
			int end = matcher.end();
			System.out.printf("%s | %s | %s [%d,%d] %n", match, grupo1, grupo2, start, end);
		}
		
		String data = "2007-12-31";
        Pattern pattern2 = Pattern.compile("(\\d{4})(-)(\\d{2})(-)(\\d{2})");
        Matcher matcher2 = pattern2.matcher(data);

        String novaData = data.replaceAll("-", "/");
        System.out.println(novaData);
        if (matcher2.matches()) {

            String ano = matcher2.group(1);
            String mes = matcher2.group(3);
            String dia = matcher2.group(5);

            String separador1 = matcher2.group(2);
            String separador2 = matcher2.group(4);

            System.out.println(dia + separador1 + mes + separador2 + ano);
        }
		
	}

}
