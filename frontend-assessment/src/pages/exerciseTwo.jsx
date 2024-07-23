import dataSections from '../data.json';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion"
import { removePTags } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ExerciseTwo = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 760);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const contentAnimation = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 10, transition: { duration: 0.5 } },
    };

    return (  
    <>
        <main className='container mx-auto pt-16 px-24 lg:px-96'>
            <h1 className='text-3xl font-semibold bg-black text-white w-fit p-4 rounded-lg'>
                Exercise 2
            </h1>
            <section className='py-4'>
                {isMobile ? (
                    <Accordion>
                        {dataSections.map((section, index) => (
                            <AccordionItem key={index} value={`item${index + 1}`}>
                                <AccordionTrigger>{section.title}</AccordionTrigger>
                                <AccordionContent>
                                    <h1 className='text-2xl'>{section.title}</h1>
                                    <p className='mt-4'>
                                        <div dangerouslySetInnerHTML={{ __html: removePTags(section.content) }} />
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                ) : (
                    <Tabs defaultValue="tab1" className="w-full">
                        {/* Tab Titles */}
                        <TabsList className="grid w-full grid-cols-4">
                            {dataSections.map((section, index) => (
                                <TabsTrigger key={index} value={`tab${index + 1}`}>
                                    {section.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {/* Tab Contents */}
                        {dataSections.map((section, index) => (
                            <TabsContent key={index} value={`tab${index + 1}`}>
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={contentAnimation}
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>{section.title}</CardTitle>
                                            <CardDescription>
                                                <div dangerouslySetInnerHTML={{ __html: removePTags(section.content) }} />
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>
                )}
            </section>
            <section className='my-6'>
                <h1 className='text-xl'>Bonus Explanation</h1>
                <p className='text-md my-4'>- Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.</p>
                <p className='text-md'>
                    <li>First, the concatenation of the string 'b' and 'a' equals to 'ba'.</li>
                    <li>Next, the plus operator before the 2nd 'a' is attempting to coerce but since the 'a' is not a numeric value. JavaScript converts it to 'NaN' which is stands for Not-a-Number. So, `+ 'a'` became 'NaN'.</li>
                    <li>So, we have 'ba' + 'NaN' (which is now converted to string because of concatenating with another string). Now we have 'baNaN'.</li>
                    <li>Then the last available string to be concatenated is 'a', it is now 'baNaN' + 'a'. Which is resulted to 'baNaNa'.</li>
                    <li>Lastly, applying .toLowerCase() method that converts all characters in the string to lowercase. `'baNaNa'.toLowerCase()` is now 'banana'</li>
                </p>
            </section>
        </main>
    </>
    );
}
 
export default ExerciseTwo;