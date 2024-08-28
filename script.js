
function App(){
    return (
        <div className="w-3/4 m-auto">
         <div className="mt-20">
             {data.map((d)=>(
                <div>
                  <div>
                    <img src={d.img} alt=""/>
                  </div>
                </div>
             ))}
         </div>
        </div>
    );
}

const data=[
    {
        title:'1st Yr Student c++ Guide Event',
        img: './Knoweldege Network.jpg',
        review : 'Session conducted for 1st year student by our knoweldge network team'
    },
    {
        title:'Participated in Hackthon 2023',
        img:"./Tech Titan.jpg",
        review: 'We have taken participation in SIH 2023 for rural area Kerla Education'
    },
    {
       title: 'CP-31 Sheet on CODEFORCES',
       img:'./800cp31.jpg'
    }
  
]
export default App;