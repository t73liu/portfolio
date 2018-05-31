import { ISymbolData } from "../store/types";

export const symbolData: Map<string, ISymbolData> = new Map<
  string,
  ISymbolData
>(
  JSON.parse(
    '{"AAPL":{"quote":{"symbol":"AAPL","companyName":"Apple Inc.","primaryExchange":"Nasdaq Global Select","sector":"Technology","calculationPrice":"close","open":174.83,"openTime":1524144600867,"close":172.8,"closeTime":1524168000263,"high":175.39,"low":172.66,"latestPrice":172.8,"latestSource":"Close","latestTime":"April 19, 2018","latestUpdate":1524168000263,"latestVolume":34707666,"iexRealtimePrice":172.92,"iexRealtimeSize":100,"iexLastUpdated":1524167997665,"delayedPrice":172.74,"delayedPriceTime":1524171599017,"previousClose":177.84,"change":-5.04,"changePercent":-0.02834,"iexMarketPercent":0.03809,"iexVolume":1322015,"avgTotalVolume":31182648,"iexBidPrice":0,"iexBidSize":0,"iexAskPrice":0,"iexAskSize":0,"marketCap":876789446400,"peRatio":17.76,"week52High":183.5,"week52Low":140.45,"ytdChange":0.007224856537489812},"news":[{"datetime":"2018-04-19T21:00:00-04:00","headline":"The 10-year Treasury could test the stock market\'s comeback","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/aapl/article/5779757146272824","summary":"No summary available.","related":"AAPL,NVDA"},{"datetime":"2018-04-19T19:00:00-04:00","headline":"Cramer Remix Contemplate","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/aapl/article/5541967460566760","summary":"No summary available.","related":"AAPL,NUE,NXPI,QCOM,URI"},{"datetime":"2018-04-19T18:18:00-04:00","headline":"Cramer tracks the \'very close\' race to $1 trillion between Apple, Amazon, Alphabet and Microsoft","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/aapl/article/6235613872686763","summary":"No summary available.","related":"AAPL,AMZN,GOOGL,MSFT"},{"datetime":"2018-04-19T15:53:00-04:00","headline":"Analysts worry Apple iPhone sales are even worse than they thought","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/aapl/article/6330781439938807","summary":"No summary available.","related":"AAPL,TSM"},{"datetime":"2018-04-19T13:31:57-04:00","headline":"ASM International falls short and chipmakers stay in downdraft","source":"SeekingAlpha","url":"https://api.iextrading.com/1.0/stock/aapl/article/8684918678540406","summary":"     Adding to general chip-industry malaise today, ASM International ( OTCQX:ASMIY ) has reported  Q1 earnings  where profit margin fell and sales disappointed management.   More news on: ASM International N.V., Apple Inc., Intel Corporation, Tech stocks news, Stocks on the move,     Read more ….","related":"AAPL,AMD,ASMIY,INTC,NASDAQ01,NVDA,OTCBULLB,SCEQPMAT,SEM31169,STM,Computing and Information Technology,TSM"}]},"FB":{"quote":{"symbol":"FB","companyName":"Facebook Inc.","primaryExchange":"Nasdaq Global Select","sector":"Technology","calculationPrice":"close","open":166.29,"openTime":1524144600571,"close":168.1,"closeTime":1524168000136,"high":168.33,"low":165.2,"latestPrice":168.1,"latestSource":"Close","latestTime":"April 19, 2018","latestUpdate":1524168000136,"latestVolume":24064978,"iexRealtimePrice":168.11,"iexRealtimeSize":100,"iexLastUpdated":1524167998161,"delayedPrice":168.13,"delayedPriceTime":1524171599282,"previousClose":166.36,"change":1.74,"changePercent":0.01046,"iexMarketPercent":0.02073,"iexVolume":498867,"avgTotalVolume":46779990,"iexBidPrice":0,"iexBidSize":0,"iexAskPrice":0,"iexAskSize":0,"marketCap":487382609651,"peRatio":27.33,"week52High":195.32,"week52Low":141.27,"ytdChange":-0.07342079153345824},"news":[{"datetime":"2018-04-19T21:55:00-04:00","headline":"How to use social media to advance your career in 4 simple steps","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/fb/article/5263176622529590","summary":"No summary available.","related":"FB"},{"datetime":"2018-04-19T13:18:00-04:00","headline":"AT&T CEO argues missing one technology cycle \'will make you sick for a very long time\'","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/fb/article/5130312644572112","summary":"No summary available.","related":"AAPL,AMZN,FB,T,TWX"},{"datetime":"2018-04-19T12:44:00-04:00","headline":"A partner at Alphabet\'s GV venture arm says Silicon Valley is \'losing touch with reality\'","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/fb/article/5470385121203751","summary":"No summary available.","related":"FB,GOOGL"},{"datetime":"2018-04-19T10:12:00-04:00","headline":"Facebook users\' data exposed to web trackers when using its login feature for other sites: Report","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/fb/article/6772570862184336","summary":"No summary available.","related":"FB"},{"datetime":"2018-04-19T08:47:49-04:00","headline":"Flattening Yield Curve, Trade Tensions, Kinder Morgan (Wall Street Breakfast Podcast)","source":"SeekingAlpha","url":"https://api.iextrading.com/1.0/stock/fb/article/6878996546096288","summary":"   Get today\'s  Wall Street Breakfast  in podcast form to listen on the go.   Today\'s top stories: Tesla is aiming to double its Model 3 production; Theresa May\'s Brexit strategy is at risk; and EU Facebook users will have to accept targeted ads.          Today\'s top stories: Global markets are a…","related":"AA,AAPL,AMZN,AXP,BAC,C,CCI,Commodities,CP,CP:CA,FB,GE,GOOG,GS,INTHPINK,JPM,KMI,LUV,MKKGY,NASDAQ01,NKE,NXPI,PG,PIR,PTC,QCOM,QQQ,SAFRF,SCITECH1,SNBR,SPY,STLD,Computing and Information Technology,TEVA,TSXTSX01,UL,URI,WFC,WYNN"}]},"NFLX":{"quote":{"symbol":"NFLX","companyName":"Netflix Inc.","primaryExchange":"Nasdaq Global Select","sector":"Consumer Cyclical","calculationPrice":"close","open":332.88,"openTime":1524144600043,"close":332.7,"closeTime":1524168000233,"high":335.31,"low":326.77,"latestPrice":332.7,"latestSource":"Close","latestTime":"April 19, 2018","latestUpdate":1524168000233,"latestVolume":8422498,"iexRealtimePrice":332.63,"iexRealtimeSize":10,"iexLastUpdated":1524167998214,"delayedPrice":332.54,"delayedPriceTime":1524171518399,"previousClose":334.52,"change":-1.82,"changePercent":-0.00544,"iexMarketPercent":0.01249,"iexVolume":105197,"avgTotalVolume":12827355,"iexBidPrice":0,"iexBidSize":0,"iexAskPrice":0,"iexAskSize":0,"marketCap":144374652975,"peRatio":223.29,"week52High":338.82,"week52Low":138.66,"ytdChange":0.6546476351519371},"news":[{"datetime":"2018-04-19T12:45:00-04:00","headline":"Netflix is catching up to Disney, and one strategist says its gains aren\'t done yet","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/nflx/article/7367847119454987","summary":"No summary available.","related":"DIS,NFLX"},{"datetime":"2018-04-19T12:12:03-04:00","headline":"Institutional Top Ideas Series: Scopia Capital","source":"SeekingAlpha","url":"https://api.iextrading.com/1.0/stock/nflx/article/8360984679203317","summary":"   In the  last entry  of this series, we took a look at top ideas from DAFNA Capital Management (whose performance practically tripled that of the  IBB  during the time frame we looked at).   Going forward, I hope to continue to delve into the portfolios of successful hedge funds predominantly i…","related":"ACOR,BIO20635,BIO20635084,ETM,GWPH,Healthcare,HZNP,IBB,MNK,NASDAQ01,NFLX,PTCT,RDUS,RTRX,TRGP,WOMPOLIX,ZGNX"},{"datetime":"2018-04-19T11:21:05-04:00","headline":"Netflix in talks with Indian telecomm","source":"SeekingAlpha","url":"https://api.iextrading.com/1.0/stock/nflx/article/4727690214609553","summary":"     Bharti Airtel is  negotiating  with Netflix ( NFLX   -1.6% ) to add the streaming service for its Airtel TV app users, sources tell Economic Times. Airtel is planning to charge a data charge, but no monthly fee for Netflix.   More news on: Netflix, Inc., Consumer stocks news,     Read more ….","related":"CON102,ENT10210,MED10210023,NASDAQ01,NFLX"},{"datetime":"2018-04-19T11:19:53-04:00","headline":"Lessons From 15 Years Of Short Selling: How To Find Great Shorts","source":"SeekingAlpha","url":"https://api.iextrading.com/1.0/stock/nflx/article/6395786457246157","summary":"   In my two recent columns,  12 Reasons Not To Short  and  10 Reasons to Short , I outlined the pros and cons of short selling and concluded that most people should avoid it altogether  but that it can make sense for certain investors. For them, I hope that by sharing some of my experien…","related":"AMZN,BBBY,CON102,CROX,DDD,NASDAQ01,NFLX,RET10217,SPECRTIL,TSLA,TSXTSX01,VRX,VRX:CA,WOMPOLIX"},{"datetime":"2018-04-19T07:38:13-04:00","headline":"Netflix explores buying a movie theater chain - L.A. Times","source":"SeekingAlpha","url":"https://api.iextrading.com/1.0/stock/nflx/article/5775735936053907","summary":"     Netflix (NASDAQ: NFLX ) has considered  buying  a movie theaters in New York and L.A., sources tell the Los Angeles Times.   More news on: Netflix, Inc., Consumer stocks news,     Read more …     ","related":"CON102,ENT10210,MED10210023,Media,NASDAQ01,New York,NFLX,WOMPOLIX"}]},"MSFT":{"quote":{"symbol":"MSFT","companyName":"Microsoft Corporation","primaryExchange":"Nasdaq Global Select","sector":"Technology","calculationPrice":"close","open":96.44,"openTime":1524144600503,"close":96.11,"closeTime":1524168000242,"high":97.07,"low":95.34,"latestPrice":96.11,"latestSource":"Close","latestTime":"April 19, 2018","latestUpdate":1524168000242,"latestVolume":23536920,"iexRealtimePrice":96.09,"iexRealtimeSize":100,"iexLastUpdated":1524167997288,"delayedPrice":96.08,"delayedPriceTime":1524171592255,"previousClose":96.44,"change":-0.33,"changePercent":-0.00342,"iexMarketPercent":0.01552,"iexVolume":365293,"avgTotalVolume":34168646,"iexBidPrice":0,"iexBidSize":0,"iexAskPrice":0,"iexAskSize":0,"marketCap":740027091006,"peRatio":28.43,"week52High":97.24,"week52Low":64.89,"ytdChange":0.12346022476218092},"news":[{"datetime":"2018-04-19T18:18:00-04:00","headline":"Cramer tracks the \'very close\' race to $1 trillion between Apple, Amazon, Alphabet and Microsoft","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/msft/article/6235613872686763","summary":"No summary available.","related":"AAPL,AMZN,GOOGL,MSFT"},{"datetime":"2018-04-19T11:28:00-04:00","headline":"A six-page memo explains Jeff Bezos\'s plan to end the era of a Microsoft Office giant","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/msft/article/6251521473707375","summary":"No summary available.","related":"AMZN,GOOGL,MSFT"},{"datetime":"2018-04-18T16:29:00-04:00","headline":"Facebook is looking for engineers to build its own chips","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/msft/article/4985052376877139","summary":"No summary available.","related":"FB,GOOGL,INTC,MSFT"},{"datetime":"2018-04-18T14:40:00-04:00","headline":"A new satellite project to livestream the Earth says it\'s backed by SoftBank, Airbus and Bill Gates","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/msft/article/7322132571816039","summary":"No summary available.","related":"MSFT,SFTBY"},{"datetime":"2018-04-18T13:48:00-04:00","headline":"How to download a copy of everything Microsoft knows about you","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/msft/article/5828154078057206","summary":"No summary available.","related":"AMZN,FB,GOOGL,MSFT,TWTR"}]},"TWTR":{"quote":{"symbol":"TWTR","companyName":"Twitter Inc.","primaryExchange":"New York Stock Exchange","sector":"Technology","calculationPrice":"close","open":31.48,"openTime":1524144655829,"close":31.54,"closeTime":1524168031729,"high":32.28,"low":30.96,"latestPrice":31.54,"latestSource":"Close","latestTime":"April 19, 2018","latestUpdate":1524168031729,"latestVolume":22624459,"iexRealtimePrice":31.535,"iexRealtimeSize":100,"iexLastUpdated":1524167997358,"delayedPrice":31.4,"delayedPriceTime":1524171473219,"previousClose":31.54,"change":0,"changePercent":0,"iexMarketPercent":0.01063,"iexVolume":240498,"avgTotalVolume":29486874,"iexBidPrice":0,"iexBidSize":0,"iexAskPrice":0,"iexAskSize":0,"marketCap":23738460770,"peRatio":630.8,"week52High":36.8,"week52Low":14.41,"ytdChange":0.2868217054263565},"news":[{"datetime":"2018-04-18T16:19:00-04:00","headline":"Here\'s why Twitter could soar double digits on its earnings: Trader","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/twtr/article/4841771506056691","summary":"No summary available.","related":"TWTR"},{"datetime":"2018-04-18T15:09:00-04:00","headline":"Square stock jumps 5% after analyst predicts \'sizable boost\' in its earnings report from bitcoin trading","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/twtr/article/8211206475817791","summary":"No summary available.","related":"SQ,TWTR"},{"datetime":"2018-04-18T13:48:00-04:00","headline":"How to download a copy of everything Microsoft knows about you","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/twtr/article/5828154078057206","summary":"No summary available.","related":"AMZN,FB,GOOGL,MSFT,TWTR"},{"datetime":"2018-04-18T09:55:00-04:00","headline":"Goldman CEO Blankfein explains his itchy Twitter finger","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/twtr/article/7313944752043957","summary":"No summary available.","related":"GS,TWTR"},{"datetime":"2018-04-18T08:31:00-04:00","headline":"Your first trade for Wednesday, April 18","source":"CNBC","url":"https://api.iextrading.com/1.0/stock/twtr/article/6140876043761974","summary":"No summary available.","related":"AAPL,ANTM,GLD,SNAP,TWTR"}]},"GOOG":{"quote":{"symbol":"GOOG","companyName":"Alphabet Inc.","primaryExchange":"Nasdaq Global Select","sector":"Technology","calculationPrice":"close","open":1069.4,"openTime":1524144600487,"close":1087.7,"closeTime":1524168000430,"high":1094.165,"low":1068.18,"latestPrice":1087.7,"latestSource":"Close","latestTime":"April 19, 2018","latestUpdate":1524168000430,"latestVolume":1741783,"iexRealtimePrice":1087.62,"iexRealtimeSize":100,"iexLastUpdated":1524167993974,"delayedPrice":1088.02,"delayedPriceTime":1524171414356,"previousClose":1072.08,"change":15.62,"changePercent":0.01457,"iexMarketPercent":0.03085,"iexVolume":53734,"avgTotalVolume":2039010,"iexBidPrice":0,"iexBidSize":0,"iexAskPrice":0,"iexAskSize":0,"marketCap":756275123381,"peRatio":62.87,"week52High":1186.89,"week52Low":836.29,"ytdChange":0.02131455399061037},"news":[{"datetime":"2018-04-19T08:47:49-04:00","headline":"Flattening Yield Curve, Trade Tensions, Kinder Morgan (Wall Street Breakfast Podcast)","source":"SeekingAlpha","url":"https://api.iextrading.com/1.0/stock/goog/article/6878996546096288","summary":"   Get today\'s  Wall Street Breakfast  in podcast form to listen on the go.   Today\'s top stories: Tesla is aiming to double its Model 3 production; Theresa May\'s Brexit strategy is at risk; and EU Facebook users will have to accept targeted ads.          Today\'s top stories: Global markets are a…","related":"AA,AAPL,AMZN,AXP,BAC,C,CCI,Commodities,CP,CP:CA,FB,GE,GOOG,GS,INTHPINK,JPM,KMI,LUV,MKKGY,NASDAQ01,NKE,NXPI,PG,PIR,PTC,QCOM,QQQ,SAFRF,SCITECH1,SNBR,SPY,STLD,Computing and Information Technology,TEVA,TSXTSX01,UL,URI,WFC,WYNN"},{"datetime":"2018-04-19T07:04:58-04:00","headline":"Wall Street Breakfast: Rally In Commodities Helps Push Stocks Higher","source":"SeekingAlpha","url":"https://api.iextrading.com/1.0/stock/goog/article/4826777151866253","summary":"             Major global equity markets   are mostly higher, helped by the continuing rally in commodity prices that has propped up the stocks of energy and mining companies. Brent crude oil is up 0.5% at $73.84/bbl, crossing $74 for the first time in four years. Aluminum is extending its recent…","related":"AA,AAPL,AMZN,ASIA0001,AXP,BAC,C,CCI,Commodities,CP,CP:CA,CRUDEOIL,FB,GE,GOOG,GOOGL,GS,INTHPINK,JPM,KMI,LUV,Market and Economy,MKKGY,NASDAQ01,NKE,NXPI,PG,PIR,PTC,QCOM,QQQ,SAFRF,SNBR,SPY,STLD,Computing and Information Technology,TEVA,TSXTSX01,UL,URI,WFC,WYNN"},{"datetime":"2018-04-18T12:42:12-04:00","headline":"Capitalizing On Big Data\'s First Stumble","source":"SeekingAlpha","url":"https://api.iextrading.com/1.0/stock/goog/article/4880495723442615","summary":"   Facebook ( FB ) was recently hit by a data scandal that smashed the stock down 20% from recent highs. Some of this reaction may be due to overblown fears of regulations and user disengagement, while other parts may be justified. Regardless, it\'s important to always view a stock\'s price relativ…","related":"FB,GOOG,GOOGL,INT31168144,NASDAQ01,ONL31168,Computing and Information Technology"},{"datetime":"2018-04-18T09:03:48-04:00","headline":"15 Ways To Play The Growing Multi-Billion Artificial Intelligence Market","source":"SeekingAlpha","url":"https://api.iextrading.com/1.0/stock/goog/article/6345261331860479","summary":"   To set the expectations right, this article is intended for you to build a watchlist. I strongly believe having a good watchlist is as important as correctly valuing a company. Let\'s say you\'re great at valuing companies and often you are able to initiate positions at exactly the right moment….","related":"AAPL,AMZN,BABA,BIDU,BOTZ,Computer Hardware,CON31167138,FB,GOOG,IBM,INTC,INTHPINK,MSFT,MU,NASDAQ01,NVDA,ROBO,TCEHY,Computing and Information Technology,YNDX"},{"datetime":"2018-04-18T07:42:58-04:00","headline":"FANG Is Leading The Charge - Cramer\'s Mad Money (4/17/18)","source":"SeekingAlpha","url":"https://api.iextrading.com/1.0/stock/goog/article/7087518010363234","summary":"         Stocks discussed on the in-depth session of Jim Cramer\'s Mad Money TV Program, Tuesday  , April 17.    Many sectors in the market are struggling but Tuesday showed that FANG stocks are here to stay. With Netflix (NFLX)  leading the charge , it was the talk of the market as analysts strug…","related":"ACIA,AMZN,BA,CBS,DG,DIS,FB,GOOG,GOOGL,INT31168144,LLL:CA,LULU,LUV,NASDAQ01,NFLX,NKE,NOC,ONL31168,RL,ROKU,RTN,SNAP,Computing and Information Technology,TIF,TPR,TSXTSX01,VIRT"}]}}'
  )
);
