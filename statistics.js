var a = [1,2,2,4,6,7,8,7,9,7,9];
console.log(a);
/*
var max = getMax(a);
var min = getMin(a);
var range = getRange(a);
var mean = getMean(a);
var ar_asc = getSortedAsc(a);
var ar_desc = getSortedDesc(a);

console.log("Max of array = "+max);
console.log("Min of array = "+min);
console.log("Range of array = "+range);
console.log("Mean of array = "+mean);
console.log("Asc "+ar_asc);
console.log("Desc "+ar_desc);
*/

var mode = getMode(a);
console.log("Asc array = "+a);
console.log("Mode = "+mode);

function getMax(ar)
{
	var ar_len = ar.length;
	var max_num;
	if(ar_len > 0)
	{
		max_num = a[0];
		for(var i=1; i < ar_len; i++)
		{
			if(ar[i] > max_num)
			{
				max_num = ar[i];
			}
		}
	}

	return max_num;
}

function getMin(ar)
{
	var ar_len = ar.length;
	var min_num;
	if(ar_len > 0)
	{
		min_num = a[0];
		for(var i=1; i < ar_len; i++)
		{
			if(ar[i] < min_num)
			{
				min_num = ar[i];
			}
		}
	}

	return min_num;
}

function getRange(ar)
{
	var max = getMax(ar);
	var min = getMin(ar);
	var range;
	if(max != undefined && min != undefined)
	{
		range = max - min;
	}

	return range;
}

function getMean(ar)
{
	var mean;
	var sum=0;
	var ar_len = ar.length;
	if(ar_len > 0)
	{
		for(var i of ar)
		{
			sum = sum + i;
		}
		mean = sum/ar_len;
	}

	return mean;
}

function getSortedAsc(ar)
{
	var ar_len = ar.length;
	if(ar_len > 0)
	{
		var cur_elem;
		for (var i=0; i < ar_len; i++)
		{
			cur_elem = ar[i];
			//loop current element with the rest and find min
			for (var j=i+1; j < ar_len; j++)
			{
				if(ar[j] < cur_elem)
				{
					ar[i] = ar[j]; //swap the value
					ar[j] = cur_elem;
					i=i-1;//so that iteration may start again from same value;
					break; //break inner loop and start the iteration all over again
				}
			}

		}
	}

	return ar;
}

function getSortedDesc(ar)
{
	var ar_len = ar.length;
	if(ar_len > 0)
	{
		var cur_elem;
		for (var i=0; i < ar_len; i++)
		{
			cur_elem = ar[i];
			//loop current element with the rest and find max
			for (var j=i+1; j < ar_len; j++)
			{
				if(ar[j] > cur_elem)
				{
					ar[i] = ar[j]; //swap the value
					ar[j] = cur_elem;
					i=i-1;//so that iteration may start again from same value;
					break; //break inner loop and start the iteration all over again
				}
			}

		}
	}

	return ar;
}

function getMedian(ar)
{

}

function getMode(ar)
{
	var ar_len = ar.length;
	if(ar_len > 0)
	{
		var ar_asc = getSortedAsc(ar);
		var elem_counter = 1;//will hold counter for current value; 1 because first value has minimum occurence of 1
		var max_counter = 0; //will hold max occurence value;
		var mode;
		var curr_elem = ar_asc[0];
		for(var i=1; i<ar_len; i++)
		{
			if(ar_asc[i] == curr_elem)
			{
				elem_counter++;

				if(i == ar_len-1)// last elem
				{
					if(elem_counter > max_counter)
					{
						mode = curr_elem;
					}
					else if (elem_counter == max_counter)
					{
						mode = mode + "," + curr_elem;
					}
				}
			}
			else
			{
					//new value found;
					if(elem_counter > 1)// don't consider value whose occurence is just 1
					{
						if(elem_counter > max_counter)
						{
							max_counter = elem_counter;
							mode = curr_elem;
						}
						else if (elem_counter == max_counter)
						{
								//another value whose occurence is same as previous range
								mode = mode + "," + curr_elem;
						}
					}

					elem_counter = 1;
		  }
			curr_elem = ar_asc[i];
		}

		return mode;
	}
}
