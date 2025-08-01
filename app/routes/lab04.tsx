import Index from "./_index";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MyTermProject (){

    const myPage = "Mean Term Project";
    const myName = "Sasipit Dowsuk";
    const myStudID = "026730491012-3";
    const myTermProject = [ //{} object
        {
            tpId: 1,
            tpSubj: "Web Techology",
            tpDesc: "พัฒนาเว็บไซต์ดูหนัง",
            tpCover: "/images/projs/TP01.png",
            tpUrl: "http://busitlab.rmutto.ac.th/~026730491012-3/project/",
            tpTeam:true,
        },
        {
            tpId: 2,
            tpSubj: "Web Techology",
            tpDesc: "เว็บไซต์เพิ่มข้อมูลสัตว์เลี้ยง",
            tpCover: "/images/projs/TP02.png",
            tpUrl: "http://busitlab.rmutto.ac.th/~026730491012-3/week10-ch073/",
            tpTeam:false,
        },
        {
            tpId: 3,
            tpSubj: "Web Techology",
            tpDesc: "เว็บไซต์ภาษา PHP",
            tpCover: "/images/projs/TP03.png",
            tpUrl: "http://busitlab.rmutto.ac.th/~026730491012-3/week08-ch071/",
            tpTeam:false,
        }
    ];
    const tpSingle = myTermProject.filter(tpTmp => 
        tpTmp.tpTeam == true
    );
    const termProj = tpSingle.map((tpObj,Index) =>
    <div className="grid grid-cols-5 mx-auto border-gray-300" key={Index}>
    <div className="w-32 p-1">
    <img src={tpObj.tpCover} className="w-full rounded-full" title={tpObj.tpSubj+"ID: " + tpObj.tpId} />
    </div>
    <div className="p-4 col-span-3 mb-auto">
    <h2 className="text-lg font-semibold text-gray-800">{tpObj.tpSubj}</h2>
    <p className="text-gray-600 text-sm mt-2">{tpObj.tpDesc}</p>
    <ItemTeam isTeam={tpObj.tpTeam}/>
    </div>
    <div className="p-4 mb-auto">
    <a href={tpObj.tpUrl} className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2">Preview</a>
    </div>
</div>
    );

    return(
    <>
        <Header title={myPage}/>
        <p className="text-xl m-3 text-center">
            Name : {myName} Student ID : {myStudID}
        </p>
        <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300">
        {termProj}
        </div>
        <div className="ps-5 pe-5 pt-3 pb-1 bg-rose-400 rounded w-16 flex justifly-center mt-5">
        <a href="/">Back</a>
        </div>
        <Footer title="2025 Sasipit Dowsuk"/>
    </>
    );

    function ItemTeam ({isTeam}){
        if(isTeam)
            return (<p>
                Group
            </p>);
            return (<p>
                Ungroup
            </p>);
    }
}