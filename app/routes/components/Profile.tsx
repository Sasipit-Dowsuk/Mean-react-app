export default function Profile(){
    return (
<>
    <h1 className="text-2xl text-neutral-50 text-center bg-rose-900">Profile</h1>
    <div className="p-10 bg-red-100 rounded">
        <img src="/images/image.png" className="rounded-full w-32 shadow-lg border-4 border-neutral mx-auto"/>
        <h2 className="text-xl text-center text-red-900 font-bold m-5">About me</h2>
        <p className="text-center w-1/2 mx-auto">
            ศศิพิชญ์ ดาวสุข เกิดที่ดาวพลูโต จังหวัดคันไซ <br/>
            Student ID : 026730491012-3 <br/>
            คณะวิทยาศาสตร์และเทคโนโลยีสารสนเทศ<br/>
        </p>
    </div>

</>
    );
}