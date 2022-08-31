questions = [{
    "question": String.raw`Случайные величины \(\,X\,\)и \(\,Y\,\)имеют совместное нормальное распределение,а \(\,x\in[1,2]\,\)— константа.При любом \(\,x\,\)верно неравенство`,
    "answers": {
        "A": String.raw`\(\,\operatorname{E}(Y|X=x)\geq \operatorname{E}(Y)\,\)`,
        "B": String.raw`\(\,\operatorname{Corr}(X,Y)\ne0\,\)`,
        "C": String.raw`\(\,\operatorname{E}(Y|X=x)\leq \operatorname{E}(Y)\,\)`,
        "D": String.raw`\(\,\operatorname{D}(Y|X=x)\geq \operatorname{D}(Y)\,\)`,
        "E": String.raw`\(\,\operatorname{D}(Y|X=x)\leq \operatorname{D}(Y)\,\)`,
    },
    "true": "E",
    "explanation": "",
}, {
    "question": String.raw`Рассмотрим хи-квадрат случайную величину с \(\,n\,\)степенями свободы.Укажите множество всех возможных значений,принимаемых данной случайной величиной с ненулевой вероятностью:`,
    "answers": {
        "A": String.raw`\(\,(0,\infty)\,\)`,
        "B": String.raw`\(\,[0,n]\,\)`,
        "C": String.raw`\(\,\{0,1,...,n\}\,\)`,
        "D": String.raw`\(\,\left\{x\in R:\sum\limits_{i=1}^{n}{x_{{}}^{2}}=1\right\}\,\)`,
        "E": String.raw`\(\,[0,n^2]\,\)`,
    },
    "true": "A",
    "explanation": "",
}, {
    "question": String.raw`Истинное значение параметра \(\,\theta\,\)равно \(\,2\,\),в случайной выборке 100 наблюдений,а информация Фишера о параметре \(\,\theta\,\),заключенная в одном наблюдении равна \(\,I_1(\theta)=9\,\).Распределение оценки максимального правдоподобия \(\,\hat{\theta}\,\)похоже на`,
    "answers": {
        "A": String.raw`\(\,N(2,\,9)\,\)`,
        "B": String.raw`\(\,N(2,\,1/900)\,\)`,
        "C": String.raw`\(\,N(2,\,1/30)\,\)`,
        "D": String.raw`\(\,N(2,\,1/3)\,\)`,
        "E": String.raw`\(\,N(2,\,1/9)\,\)`,
    },
    "true": "B",
    "explanation": "",
}, {
    "question": String.raw`Нормальные случайные величины \(\,X\sim N(2,5)\,\)и \(\,Y\sim N(5,2)\,\)имеют совместное нормальное распределение.Они независимы,если:`,
    "answers": {
        "A": String.raw`\(\,\operatorname{D}(XY)=\operatorname{Cov}(X,Y)\,\)`,
        "B": String.raw`\(\,\operatorname{Corr}(X,Y)=-1\,\)`,
        "C": String.raw`\(\,\operatorname{P}(X>Y)=\operatorname{P}(Y>X)\,\)`,
        "D": String.raw`\(\,\operatorname{Corr}(X,Y)=1\,\)`,
        "E": String.raw`\(\,\operatorname{E}(XY)=10\,\)`,
    },
    "true": "E",
    "explanation": "",
}, {
    "question": String.raw`Имеется случайная выборка размера \(\,50\,\)из нормального распределения.При проверке гипотезы о равенстве дисперсии заданному значению при неизвестном математическом ожидании используется статистика,имеющая распределение`,
    "answers": {
        "A": String.raw`\(\,F_{49,50}\,\)`,
        "B": String.raw`\(\,\chi^2_{49}\,\)`,
        "C": String.raw`\(\,t_{n-1}\,\)`,
        "D": String.raw`\(\,t_{n-2}\,\)`,
        "E": String.raw`\(\,N(0,1)\,\)`,
    },
    "true": "B",
    "explanation": "",
}, {
    "question": String.raw`При построении доверительного интервала для разности долей при больших выборках размеров \(\,m\,\)и \(\,n\,\)используется распределение`,
    "answers": {
        "A": String.raw`\(\,F_{m-1,n-1}\,\)`,
        "B": String.raw`\(\,t_{m+n}\,\)`,
        "C": String.raw`\(\,F_{n,m}\,\)`,
        "D": String.raw`\(\,t_{m+n-2}\,\)`,
        "E": String.raw`\(\,N(0;1)\,\)`,
    },
    "true": "E",
    "explanation": "",
}, {
    "question": String.raw`Вася считает,что контрольные по макроэкономике и статистике нравятся студентам с одинаковой вероятностью.Чтобы проверить эту гипотезу,он опросил по 100 случайных однокурсников после каждой контрольной и выяснил,что макроэкономика понравилась 30 студентам,а статистика— 50.При расчётах Вася получил P-значение равное 0.0038.Это означает,что гипотеза`,
    "answers": {
        "A": String.raw`отвергается на уровне значимости 5%,но не отвергается на 1%`,
        "B": String.raw`не отвергается на любом возможном уровне значимости`,
        "C": String.raw`отвергается на любом возможном уровне значимости`,
        "D": String.raw`отвергается на уровне значимости 1%`,
        "E": String.raw`отвергается на уровне значимости 1%,но не отвергается на 5%`,
    },
    "true": "D",
    "explanation": "",
}, {
    "question": String.raw`Величина \(\,X\,\)принимает три значения \(\,1\,\),\(\,2\,\)и \(\,3\,\).По случайной выборке из ста наблюдений оказалось,что \(\,1\,\)выпало 40 раз,\(\,2\,\)— 40 раз и \(\,3\,\)— 20 раз.Карл хочет проверить гипотезу о том,что все три вероятности одинаковые.При верной \(\,H_0\,\)критерий Пирсона имеет распределение`,
    "answers": {
        "A": String.raw`\(\,\chi^2_1\,\)`,
        "B": String.raw`\(\,\chi^2_3\,\)`,
        "C": String.raw`\(\,\chi^2_{99}\,\)`,
        "D": String.raw`\(\,N(0;1)\,\)`,
        "E": String.raw`\(\,\chi^2_2\,\)`,
    },
    "true": "E",
    "explanation": "",
}, {
    "question": String.raw`Пусть \(\,X_1,\,...,\,X_n\,\)— случайная выборка из распределения Пуассона с параметром \(\,\lambda>0\,\).Известно,что оценка максимального правдоподобия параметра \(\,\lambda\,\)равна \(\,\bar{X}\,\).Чему равна оценка максимального правдоподобия для \(\,1/\lambda\,\)?`,
    "answers": {
        "A": String.raw`\(\,1/\bar{X}\,\)`,
        "B": String.raw`\(\,e^{\bar{X}}\,\)`,
        "C": String.raw`\(\,\bar{X}\,\)`,
        "D": String.raw`\(\,\ln \bar{X}\,\)`,
        "E": String.raw`\(\,\bar{X}/n\,\)`,
    },
    "true": "A",
    "explanation": "",
}, {
    "question": String.raw`P-значение теста и мощность теста`,
    "answers": {
        "A": String.raw`Не связаны никаким строгим соотношением`,
        "B": String.raw`Дают в сумме \(\,1\,\)`,
        "C": String.raw`P-значение всегда меньше мощности`,
        "D": String.raw`Равны`,
        "E": String.raw`P-значение всегда больше мощности`,
    },
    "true": "A",
    "explanation": "",
}, {
    "question": String.raw`Пусть \(\,X_1,\,...,\,X_n\,\)— случайная выборка и \(\,\ell(\theta)\,\)— её логарифмическая функция правдоподобия.Тестируется гипотеза \(\,H_0:\theta=1\,\).Известно,что \(\,\max_{\theta}\ell(\theta)=-10\,\),а \(\,\ell(1)=-20\,\).Чему равно значение статистики отношения правдоподобия?`,
    "answers": {
        "A": String.raw`\(\,20\,\)`,
        "B": String.raw`\(\,0\,\)`,
        "C": String.raw`\(\,-20\,\)`,
        "D": String.raw`\(\,-10\,\)`,
        "E": String.raw`\(\,10\,\)`,
    },
    "true": "A",
    "explanation": "",
}, {
    "question": String.raw`Пусть \(\,X_1,\,...,\,X_n\,\)— случайная выборка из распределения с плотностью распределения \[f(x;\,\theta)=\begin{cases}\frac{2x}{\theta^2}& x \in[0;\,\theta],\\ 0&x \not\in[0;\,\theta],\end{cases}\]где \(\,\theta>0\,\).Используя начальный момент 2-го порядка,при помощи метода моментов найдите оценку неизвестного параметра \(\,\theta\,\).`,
    "answers": {
        "A": String.raw`\(\,\sqrt{\sum_{i=1}^{n}X_i^2}\,\)`,
        "B": String.raw`\(\,\sqrt{\tfrac{2}{n}\sum_{i=1}^{n}X_i^2}\,\)`,
        "C": String.raw`\(\,\tfrac{3}{2}\bar{X}\,\)`,
        "D": String.raw`\(\,\sqrt{\tfrac{n}{2}\sum_{i=1}^{n}X_i^2}\,\)`,
        "E": String.raw`\(\,\tfrac{2}{3}\bar{X}\,\)`,
    },
    "true": "B",
    "explanation": "",
}, {
    "question": String.raw`При построении доверительного интервала для отношения дисперсий в двух выборках размером в 25 и 16 наблюдений было получено значение тестовой статистики 5.Если оценка дисперсии по одной из выборок равна 3,то другая оценка дисперсии может быть равна`,
    "answers": {
        "A": String.raw`\(\,0.8\,\)`,
        "B": String.raw`\(\,0.6\,\)`,
        "C": String.raw`\(\,41\,\)`,
        "D": String.raw`\(\,30\,\)`,
        "E": String.raw`\(\,80\,\)`,
    },
    "true": "B",
    "explanation": "",
}, {
    "question": String.raw`Математическое ожидание оценки дисперсии \(\,\hat \sigma^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2\,\)для выборки из распределения Пуассона с \(\,\lambda=3\,\),равняется`,
    "answers": {
        "A": String.raw`\(\,9\,\)`,
        "B": String.raw`\(\,3/n\,\)`,
        "C": String.raw`\(\,9/n\,\)`,
        "D": String.raw`\(\,1\,\)`,
        "E": String.raw`\(\,3\,\)`,
    },
    "true": "E",
    "explanation": "",
}, {
    "question": String.raw`Случайные величины \(\,X\,\)и \(\,Y\,\)распределены нормально с неизвестным математическим ожиданием и неизвестной дисперсией.Для тестирования гипотезы о равенстве дисперсий выбирается \(\,20\,\)наблюдений случайной величины \(\,X\,\)и \(\,30\,\)наблюдений случайной величины \(\,Y\,\).Какое распределение может иметь статистика,используемая в данном случае?`,
    "answers": {
        "A": String.raw`\(\,\chi^2_{48}\,\)`,
        "B": String.raw`\(\,F_{20,30}\,\)`,
        "C": String.raw`\(\,t_{48}\,\)`,
        "D": String.raw`\(\,F_{29,19}\,\)`,
        "E": String.raw`\(\,\chi^2_{49}\,\)`,
    },
    "true": "D",
    "explanation": "",
}, {
    "question": String.raw`Последовательность оценок \(\,\hat \theta_n\,\)называется состоятельной для параметра \(\,\theta\,\),если`,
    "answers": {
        "A": String.raw`\(\,\operatorname{D}(\hat \theta_n)=(\theta)^2/n\,\)`,
        "B": String.raw`\(\,\hat \theta_n \stackrel{P}{\to}\theta\,\operatorname{if}\,n\stackrel{}{\to}\infty\,\)`,
        "C": String.raw`\(\,\operatorname{E}((\hat \theta_n-\theta)^2)\leq \operatorname{E}((\tilde \theta-\theta)^2)\,\forall \,\tilde \theta \in K\,\)`,
        "D": String.raw`\(\,\operatorname{E}(\hat \theta_n)=\theta\,\)`,
        "E": String.raw`\(\,\operatorname{E}((\hat \theta_n-\theta)^2)\stackrel{}{\to}0\,\operatorname{if}\,n\stackrel{}{\to}\infty\,\)`,
    },
    "true": "B",
    "explanation": "",
}, {
    "question": String.raw`Оценка \(\,\hat \theta_n\,\)называется эффективной оценкой параметра \(\,\theta\,\)в классе оценок \(\,K\,\),если`,
    "answers": {
        "A": String.raw`\(\,\operatorname{D}(\hat \theta_n)=(\theta)^2/n\,\)`,
        "B": String.raw`\(\,\operatorname{E}(\hat \theta_n)=\theta\,\)`,
        "C": String.raw`\(\,\operatorname{E}((\hat \theta_n-\theta)^2)\stackrel{}{\to}0\,\operatorname{if}\,n\stackrel{}{\to}\infty\,\)`,
        "D": String.raw`\(\,\operatorname{E}((\hat \theta_n-\theta)^2)\leq \operatorname{E}((\tilde \theta-\theta)^2)\,\forall \,\tilde \theta \in K\,\)`,
        "E": String.raw`\(\,\hat \theta_n \stackrel{\operatorname{P}}{\to}\theta\,\operatorname{if}\,n\stackrel{}{\to}\infty\,\)`,
    },
    "true": "D",
    "explanation": "",
}, {
    "question": String.raw`Вася считает,что контрольные по макроэкономике и статистике нравятся студентам с одинаковой вероятностью.Чтобы проверить эту гипотезу,он опросил по 100 случайных однокурсников после каждой контрольной и выяснил,что макроэкономика понравилась 30 студентам,а статистика— 50.При проверке этой гипотезы,тестовая статистика может иметь распределение`,
    "answers": {
        "A": String.raw`\(\,t_{99}\,\)`,
        "B": String.raw`\(\,N(0,1)\,\)`,
        "C": String.raw`\(\,t_{98}\,\)`,
        "D": String.raw`\(\,t_{100}\,\)`,
        "E": String.raw`\(\,t_{198}\,\)`,
    },
    "true": "B",
    "explanation": "",
}, {
    "question": String.raw`Вася считает,что контрольные по макроэкономике и статистике нравятся студентам с одинаковой вероятностью.Чтобы проверить эту гипотезу,он опросил по 100 случайных однокурсников после каждой контрольной и выяснил,что макроэкономика понравилась 30 студентам,а статистика— 50.При расчётах Вася получил P-значение равное 0.0038.Это означает,что гипотеза`,
    "answers": {
        "A": String.raw`отвергается на любом возможном уровне значимости`,
        "B": String.raw`не отвергается на любом возможном уровне значимости`,
        "C": String.raw`отвергается на уровне значимости 1%`,
        "D": String.raw`отвергается на уровне значимости 1%,но не отвергается на 5%`,
        "E": String.raw`отвергается на уровне значимости 5%,но не отвергается на 1%`,
    },
    "true": "C",
    "explanation": "",
}, {
    "question": String.raw`Если функция правдоподобия пропорциональна \(\,a^2(1-a)^6\,\),априорная плотность пропорциональна \(\,\exp(-a)\,\),то апостериорная плотность параметра \(\,a\,\)пропорциональна`,
    "answers": {
        "A": String.raw`\(\,0.5 a^2(1-a)^6+0.5\exp(a)\,\)`,
        "B": String.raw`\(\,\frac{a^2(1-a)^6}{\exp(-a)}\,\)`,
        "C": String.raw`\(\,\frac{a^2(1-a)^6}{\exp(a)}\,\)`,
        "D": String.raw`\(\,0.5 a^2(1-a)^6+0.5\exp(-a)\,\)`,
        "E": String.raw`\(\,\frac{\exp(-a)}{a^2(1-a)^6}\,\)`,
    },
    "true": "C",
    "explanation": "",
}, {
    "question": String.raw`Даны выборки объёма \(\,n\,\)из равномерного на отрезке \(\,[0,1]\,\)распределения.Выборочный начальный момент второго порядка стремится по вероятности при \(\,n \stackrel{}{\to}\infty\,\)к`,
    "answers": {
        "A": String.raw`\(\,1/3\,\)`,
        "B": String.raw`\(\,1\,\)`,
        "C": String.raw`\(\,1/12\,\)`,
        "D": String.raw`\(\,1/4\,\)`,
        "E": String.raw`\(\,1/2\,\)`,
    },
    "true": "A",
    "explanation": "",
}, {
    "question": String.raw`Рассмотрим алгоритм Метрополиса-Гастингса для получения выборки параметра с апостериорной плотностью пропорциональной \(\,t^2\,\).Предлагаемый переход из \(\,a\,\)в \(\,b\,\)задаётся правилом,\(\,b=a+Z\,\),где \(\,Z \sim N(0;4)\,\).Вероятность одобрения перехода из точки \(\,0.5\,\)в точку \(\,0.3\,\)равна`,
    "answers": {
        "A": String.raw`\(\,0.5\,\)`,
        "B": String.raw`\(\,0.36\,\)`,
        "C": String.raw`\(\,1\,\)`,
        "D": String.raw`\(\,0.64\,\)`,
        "E": String.raw`\(\,0.6\,\)`,
    },
    "true": "B",
    "explanation": "",
}, {
    "question": String.raw`Пусть \(\,X_1,\,...,\,X_n\,\)— случайная выборка из распределения Бернулли с параметром \(\,p \in(0;\,1)\,\).Чему равна информация Фишера о параметре \(\,p\,\),заключенная в двух наблюдениях случайной выборки?`,
    "answers": {
        "A": String.raw`\(\,\tfrac{2}{p(1-p)}\,\)`,
        "B": String.raw`\(\,\tfrac{2}{p}\,\)`,
        "C": String.raw`\(\,2(1-p)\,\)`,
        "D": String.raw`\(\,2p(1-p)\,\)`,
        "E": String.raw`\(\,2p\,\)`,
    },
    "true": "A",
    "explanation": String.raw`
            \(L = p^{X_1} \cdot (1- p)^{1-X_1} \) <br>
            \(l = X_1 \ln p + (1 - X_1)\cdot \ln (1 - p)\)  <br>
            \(\frac{\partial l}{\partial p} = \frac{X_1}{p} - \frac{1 - X_1}{1-p} \)  <br>
            \(\frac{\partial l ^ 2}{\partial ^2 \theta}
            = - \frac{X_1}{p} - \frac{1-X_1}{(1-p)^2} \)   <br>
            \(I_1(p) = - \operatorname{E}(\frac{\partial l ^ 2}{\partial ^2 \theta}) = \)  <br>
            \(=\frac{p}{p^2} + \frac{1-p}{(1-p)^2} = \frac{1}{p(1-p)}\)  <br>
            \(I_n(p) = I_1(p) \cdot n \Rightarrow I_2(p) = \frac{2}{p(1-p)}\)  <br>
        `,
}, {
    "question": String.raw`Пусть \(\,X\sim\mathcal{N}(0,1)\,\)и \(\,Y\sim\chi^{2}(4)\,\)— независимые стандартная нормальная и хи-квадрат с четырьмя степенями свободы случайные величины соответственно.Вероятность \(\,\operatorname{P}(X^2>Y)\,\)равна`,
    "answers": {
        "A": String.raw`\(\,0.322\,\)`,
        "B": String.raw`\(\,0.643\,\)`,
        "C": String.raw`\(\,0.592\,\)`,
        "D": String.raw`\(\,0.679\,\)`,
        "E": String.raw`\(\,0.791\,\)`,
    },
    "true": "B",
    "explanation": "",
}, {
    "question": String.raw`Каждый из трёх толстяков,независимо друг от друга,за день съедает количество пищи,являющееся хи-квадрат случайной величиной с тремя степенями свободы.Какой суммарный объем съеденного тремя толстяками за день будет превышен с вероятностью \(\,0.05\,\)?`,
    "answers": {
        "A": String.raw`\(\,21.66\,\)`,
        "B": String.raw`\(\,0.35\,\)`,
        "C": String.raw`\(\,16.92\,\)`,
        "D": String.raw`\(\,3.32\,\)`,
        "E": String.raw`\(\,7.81\,\)`,
    },
    "true": "C",
    "explanation": "",
}, {
    "question": String.raw`Случайная выборка состоит из одного наблюдения \(\,X_1\,\),которое имеет плотность распределения \[f(x;\,\theta)=\begin{cases}\tfrac{1}{\theta^2}x e^{-x/\theta}&x>0,\\ 0&x\leq 0,\end{cases}\]где \(\,\theta>0\,\).Чему равна оценка неизвестного параметра \(\,\theta\,\),найденная с помощью метода максимального правдоподобия?`,
    "answers": {
        "A": String.raw`\(\,1/\ln X_1\,\)`,
        "B": String.raw`\(\,X_1/2\,\)`,
        "C": String.raw`\(\,\frac{X_1}{\ln X_1}\,\)`,
        "D": String.raw`\(\,X_1\,\)`,
        "E": String.raw`\(\,\ln X_1\,\)`,
    },
    "true": "B",
    "explanation": "",
}, {
    "question": String.raw`По 100 наблюдениям за нормально распределенной случайной величиной с известной дисперсией,Вася проверял гипотезу \(\,H_0:\mu=10\,\)при альтернативной гипотезе \(\,H_1:\mu>10\,\).По данным оказалось,что выборочное среднее \(\,\bar{X}=12\,\).Вася рассчитал тестовую статистику и P-значение.После этого Вася решил попробовать изменить альтернативную гипотезу на \(\,H_1:\mu \neq 10\,\).P-значение при этом:`,
    "answers": {
        "A": String.raw`Выросло,насколько— неизвестно`,
        "B": String.raw`Выросло вдвое`,
        "C": String.raw`Не изменилось`,
        "D": String.raw`Упало,насколько— неизвестно`,
        "E": String.raw`Упало вдвое`,
    },
    "true": "B",
    "explanation": "",
}, {
    "question": String.raw`Дана реализация выборки:-1,1,0,2.Эмпирическая(выборочная)функция распределения в точке \(\,x=0.5\,\)принимает значение равное`,
    "answers": {
        "A": String.raw`\(\,0.8\,\)`,
        "B": String.raw`\(\,0\,\)`,
        "C": String.raw`\(\,0.5\,\)`,
        "D": String.raw`\(\,0.25\,\)`,
        "E": String.raw`\(\,1\,\)`,
    },
    "true": "C",
    "explanation": "",
}, {
    "question": String.raw`Величина \(\,X\,\)принимает три значения \(\,1\,\),\(\,2\,\)и \(\,3\,\).По случайной выборке из ста наблюдений оказалось,что \(\,1\,\)выпало 40 раз,\(\,2\,\)— 40 раз и \(\,3\,\)— 20 раз.Андрей Николаевич хочет проверить гипотезу о том,что все три вероятности одинаковые.Значение критерия согласия Колмогорова равно`,
    "answers": {
        "A": String.raw`\(\,3/5\,\)`,
        "B": String.raw`\(\,2/15\,\)`,
        "C": String.raw`\(\,3/4\,\)`,
        "D": String.raw`\(\,2/5\,\)`,
        "E": String.raw`\(\,1/4\,\)`,
    },
    "true": "B",
    "explanation": "",
}, {
    "question": String.raw`Величина \(\,X\,\)принимает три значения \(\,1\,\),\(\,2\,\)и \(\,3\,\).По случайной выборке из ста наблюдений оказалось,что \(\,1\,\)выпало 40 раз,\(\,2\,\)— 40 раз и \(\,3\,\)— 20 раз.Карл хочет проверить гипотезу о том,что все три вероятности одинаковые.Значение критерия согласия Пирсона равно`,
    "answers": {
        "A": String.raw`\(\,4\,\)`,
        "B": String.raw`\(\,8\,\)`,
        "C": String.raw`\(\,6\,\)`,
        "D": String.raw`\(\,7\,\)`,
        "E": String.raw`\(\,5\,\)`,
    },
    "true": "B",
    "explanation": "",
}, ]

init_question();   
var result_array = new Array(questions.length);