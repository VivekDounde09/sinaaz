import React from 'react';

const Section2 = () => {
  return (
    <section className="mb-5">
      <div className="mb-5">
        <h2 className="para-bold-18 mb-3">
          Policy funding ($40,000 x 5 years = $200,000)
        </h2>
        <p className="para-14">
          Your contributions are used to purchase death benefit protection that
          can provide cash in the event of a chronic or terminal illness. The
          excess funds have the potential to accumulate and grow over time,
          which can be used to help supplement your retirement.
        </p>
      </div>
      <div className="my-5">
        <h2 className="para-bold-18 mb-3">Benefits and distributions by age</h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-[#F4E347]"></span>
            <p className="para-14">Protection</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-[#EA2FD7]"></span>
            <p className="para-14">Accumulation</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-between bg-primary-300 p-3 rounded-xl ">
          <div>
            <h2 className="text-[#12171B] font-semibold font-inter text-18 py-2">
              Age 55
            </h2>
            <div className="flex gap-4">
              <div>
                <p className="h-4 w-4 rounded-full bg-[#F4E347] mt-2"></p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-primary-400 font-normal font-inter text-18 ">
                  Initial death benefit protection
                </p>
                <p className="text-[#949292] font-normal font-inter text-14">
                  Access to living benefit riders
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="flex justify-end">
              <img
                className="h-4 w-4 object-cover"
                src="/images/Vector.png"
                alt=""
              />
            </p>
            <p className="text-[#12171B] font-semibold font-inter text-18">
              $925,926
            </p>
          </div>
        </div>
        <div className="flex justify-between bg-primary-300 p-3 rounded-xl ">
          <div>
            <h2 className="text-[#12171B] font-semibold font-inter text-18 py-2">
              Age 55
            </h2>
            <div className="flex gap-4">
              <div>
                <p className="h-4 w-4 rounded-full bg-[#F4E347] mt-2"></p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-primary-400 font-normal font-inter text-18 ">
                  Initial death benefit protection
                </p>
                <p className="text-[#949292] font-normal font-inter text-14">
                  Access to living benefit riders
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="flex justify-end">
              <img
                className="h-4 w-4 object-cover"
                src="/images/Vector.png"
                alt=""
              />
            </p>
            <p className="text-[#12171B] font-semibold font-inter text-18">
              $925,926
            </p>
          </div>
        </div>
        <div className="md:col-span-2 md:grid md:grid-cols-2 flex flex-col gap-10  bg-primary-300 p-3 rounded-xl mb-2">
          <div className="flex justify-between">
            <div>
              <h2 className="text-[#12171B] font-semibold font-inter text-18 py-2">
                Age 55
              </h2>
              <div className="flex gap-4">
                <div>
                  <p className="h-4 w-4 rounded-full bg-[#F4E347] mt-2"></p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-primary-400 font-normal font-inter text-18 ">
                    Initial death benefit protection
                  </p>
                  <p className="text-[#949292] font-normal font-inter text-14">
                    Access to living benefit riders
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="flex justify-end">
                <img
                  className="h-4 w-4 object-cover"
                  src="/images/Vector.png"
                  alt=""
                />
              </p>
              <p className="text-[#12171B] font-semibold font-inter text-18">
                $925,926
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-[#12171B] font-semibold font-inter text-18 py-2">
                Age 55
              </h2>
              <div className="flex gap-4">
                <div>
                  <p className="h-4 w-4 rounded-full bg-[#F4E347] mt-2"></p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-primary-400 font-normal font-inter text-18 ">
                    Initial death benefit protection
                  </p>
                  <p className="text-[#949292] font-normal font-inter text-14">
                    Access to living benefit riders
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="flex justify-end">
                <img
                  className="h-4 w-4 object-cover"
                  src="/images/Vector.png"
                  alt=""
                />
              </p>
              <p className="text-[#12171B] font-semibold font-inter text-18">
                $925,926
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
