def reverse_string(str)
  reversedStr = ''
  i = 0
  while i < str.size
    reversedStr = str[i] + reversedStr

    i += 1
  end
  reversedStr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution