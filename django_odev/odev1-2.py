def flatten_list(lst):
    flattened_list = []
    for item in lst:
        if isinstance(item, list):
            flattened_list.extend(flatten_list(item))
        else:
            flattened_list.append(item)
    return flattened_list

input_list = [[1,'a',['cat'],2],[[[3]],'dog'],4,5]
output_list = flatten_list(input_list)
print(output_list)

def reverse_list(lst):
    reversed_list = []
    for item in lst[::-1]:
        if isinstance(item, list):
            reversed_list.append(reverse_list(item))
        else:
            reversed_list.append(item)
    return reversed_list

input_list = [[1, 2], [3, 4], [5, 6, 7]]
output_list = reverse_list(input_list)
print(output_list)