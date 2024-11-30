import React from 'react';
import { FaCoffee, FaAppleAlt, FaCarrot } from 'react-icons/fa';
import Card from "../components/Card"

const Services = () => {
    return (
        <>
            {/* <div className="flex flex-col items-center px-[90px] py-2"> */}
            <div className="container mx-auto px-7 py-8">
                {/* <h1 className="text-3xl font-bold mb-6 ">الخدمات المقدمة</h1> */}
                <h1 className="text-3xl font-bold mb-8 text-right">الخدمات المقدمة</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 w-full " dir='rtl'> 
                    <div className="col-span-1">
                        <Card 
                            icon={<img src='img/Frame3.png'/>}
                            heading="تحفيظ القران الكريم"
                            paragraph="تهدف الي مساعدة المتعلمين علي حفظ القران الكريم وتدريبهم باستمرار"
                        />
                    </div>
                    <div className="col-span-1">
                        <Card
                            icon={<img src='img/Frame 3(1).png'/>}
                            heading="تعلم التجويد بالكامل"
                            paragraph="تهدف الي مساعدة المتعلمين علي  تعلم القراءة بالتجويد الدقيق"   
                        />
                    </div>
                    <div className="col-span-1">
                        <Card
                            icon={<img src='img/Frame3(2).png'/>}
                            heading="تقييم الطلاب باستمرار"
                            paragraph="تهدف الي تقييم الطلاب عن طريق اختيارات متعددة لقياس مستواهم بسهولة "
                        />
                    </div>
                    <div className="col-span-1">
                        <Card
                            icon={<img src='img/Frame3(4).png'/>}
                            heading="دروس التفسير"
                            paragraph="شرح معانى الايات مما يساعد الطلاب على فهم الرسالة القرآنية وتأثيرها"
                        />
                    </div>
                    <div className="col-span-1">
                        <Card
                            icon={<img src='img/Frame3(5).png'/>}
                            heading="دروس المراجعة"
                            paragraph="تخصص لتثبيت ما تم حفظه حيث يتم مراجعة السور والايات بشكل دورى"
                        />
                    </div>
                    <div className="col-span-1">
                        <Card
                            icon={<img src='img/Frame3(6).png'/>}
                            heading="دروس الحفظ المتقدم"
                            paragraph="خصصه للطلاب الذين لديهم مستوى متقدم في الحفظ في وقت اقصر"
                        />
                    </div>
                    <div className="col-span-1">
                        <Card
                            icon={<img src='img/Frame 3(1).png'/>}
                            heading="دروس النطبيقات العملية"
                            paragraph="عقد تطبيق ما تم حفظه في الحياة اليومية متل قراءة القران في الصلاة او اثناء الاذكار"
                        />
                    </div>
                    <div className="col-span-1">
                        <Card
                            icon={<img src='img/Frame3(2).png'/>}
                            heading="دروس الفقه القراني"
                            paragraph="تناول الأمور الفقهية المستندة الي ايات القران مما يعزز فهم الطلاب للتشريعات الاسلامية"
                        />
                    </div>
                    <div className="col-span-1">
                        <Card
                            icon={<img src='img/Frame3(7).png'/>}
                            heading="دروس اعداد المدربين"
                            paragraph="تعقد لمن يرغب في ان يصبح مدربا في تحفيظ القران واساليب التدريس"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;



